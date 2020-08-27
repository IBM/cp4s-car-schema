const { coreSchema } = require('../schema/coreSchema');
const { filterSchema, customPropertiesFilter } = require('./filter/filterSchema');
const { defaultLimit, defaultNestedLimit } = require('./filter/resolver');

const EdgeDirection = {
  OUTGOING: true,
  INCOMING: false,
};

const scalarTypes = ['Date', 'JSON'];

const arangDbHiddenFields = ['_key', '_rev'];

const searchFunction = (functionName, typeName, filter, sort) => {
  let searchFuncDef = `
  "Default items = ${defaultLimit}, use limit filter to adjust"
  ${functionName}(
    """
    Specifies how many elements should be at most included in the result.
    """
    limit: Int = ${defaultLimit}
    """
    Specifies how many elements from the result shall be skipped.
    If limit is not specified, this argument is ignored.
    """
    offset: Int
  `;

  if (sort && sort.isSortable()) {
    searchFuncDef += `
    """
    Specifies the field names to sort the results by in ascending or descending order.
    """
    orderBy: [ ${sort.typeName} ]
    `;
  }

  if (filterSchema.filterTypes.global.filterItems)
    searchFuncDef += `
    """
    Global filter is applied to each collection in all of the search range.
    It is automatically joined with other arguments in each search level by 'AND' conjunction.
    """
    globalFilter: GlobalFilter
    
    `;

  if (filter && filter.filterItems)
    searchFuncDef += `
    """
    Provides advanced search via multiple operators in a single search level.
    It is automatically joined with other arguments in the same search level by 'AND' conjunction.
    """
    filter: ${filter.typeName}`;

  searchFuncDef += `): [${typeName}]
      @cost(complexity: 0, multipliers: ["limit"])
  `;
  return searchFuncDef;
};

const typeMapping = { string: 'String', number: 'Float', boolean: 'Boolean', integer: 'Int' };
function mapType(type) {
  return typeMapping[type] || type;
}

const typeNameMapping = {};
// prettier-ignore
function formatTypeName(typeName) {
  return typeNameMapping[typeName.toLowerCase()] || typeName.charAt(0).toUpperCase() + typeName.slice(1);
}

function makeFirstCharLowerCase(name) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

function typeNametoFieldName(typeName) {
  return makeFirstCharLowerCase(typeName);
}

function makePlural(name) {
  const lastChar = name.slice(-1);
  if (lastChar === 's') return name + 'es';
  if (lastChar === 'y') return name.slice(0, -1) + 'ies';
  return name + 's';
}

class FieldArgument {
  constructor(name, type, isArray, required, docstring, _default) {
    this.name = name;
    this.type = type;
    this.isArray = isArray;
    this.required = required;
    this.default = _default;
    this.docstring = docstring;
  }

  toString() {
    let res = '';
    if (this.docstring) res += `"${this.docstring}" `;
    res += `${this.name}: `;
    if (this.isArray) res += `[${this.type}]`;
    else res += this.type;
    if (this.default) res += ` = ${this.default}`;
    if (this.required) res += '!';
    return res;
  }
}

class Field {
  constructor(name, ownerType, comment, costDirective) {
    this.name = name;
    ownerType.fields[name] = this;
    this.arguments = [];
    this.comment = comment;
    this.costDirective = costDirective;
  }

  toString() {
    let res = '';
    if (this.comment) res += `"${this.comment}"\n  `;
    const args =
      (this.arguments.length && `(${this.arguments.map(arg => arg.toString()).join('  ')})`) || '';
    res += `${this.name}${args}: `;
    if (this.isArray) res += `[${this.type}]`;
    else res += this.type;
    if (this.required) res += '!';
    if (this.costDirective) res += `\n    ${this.costDirective}`;
    else res += ' @cost';
    return res;
  }
}

class JsonSchemaField extends Field {
  constructor(name, ownerType, fieldSchema) {
    if (fieldSchema.graphql_name) {
      super(fieldSchema.graphql_name, ownerType);
      this.jsonSchemaName = name;
    } else super(name, ownerType);

    if (fieldSchema.graphql_hidden) this.hidden = true;

    let jsonSchemaType = fieldSchema.type;
    if (fieldSchema.graphql_type) this.type = fieldSchema.graphql_type;
    else {
      let type;
      if (jsonSchemaType instanceof Array) jsonSchemaType = jsonSchemaType[0];
      if (jsonSchemaType === 'array') {
        this.isArray = true;
        type = mapType(fieldSchema.items.type);
      } else type = mapType(jsonSchemaType);

      if (type === 'object') {
        const typeName = ownerType.name + formatTypeName(this.name);
        const type = new Type(typeName);
        type.createFields(fieldSchema, [], true);
        type.searchFunctionName = undefined;
        type.collectionName = undefined;
        graphQLSchema.types[typeName] = type;
        this.type = typeName;
      } else this.type = type;
    }
  }
}

class IDField extends Field {
  constructor(name, ownerType) {
    super(name, ownerType);
    this.type = 'ID';
    this.required = true;
  }
}

class VirtualKeyField extends IDField {
  constructor(name, ownerType) {
    super('key', ownerType);
    this.jsonSchemaName = name;
  }
}

class SourceField extends Field {
  constructor(ownerType) {
    super('source', ownerType);
    this.type = 'String';
    this.required = true;
  }
}

class ReportField extends Field {
  constructor(ownerType) {
    super('report', ownerType);
    this.type = 'String';
    this.required = true;
  }
}

class TypeField extends Field {
  constructor(typeName, ownerType) {
    super(typeNametoFieldName(typeName), ownerType);
    this.type = typeName;
    this.required = true;
  }
}

class HiddenField extends Field {
  constructor(name, ownerType) {
    super(name, ownerType);
    this.hidden = true;
  }
}

class CustomPropertiesField extends Field {
  constructor(ownerType) {
    super('customProperties', ownerType);
    this.type = 'JSON';
    this.required = true;
    this.arguments.push(
      new FieldArgument('filter', filterSchema.filterTypes[customPropertiesFilter].typeName, false)
    );
    this.isCustomPropertiesField = true;
  }
}

class SortFieldType {
  constructor(collectionName, fieldName) {
    this.collectionName = collectionName;
    this.name = fieldName;
    this.type = 'SortDirection';
    this.required = false;
    this.isArray = false;
  }

  toString() {
    return `${this.name}: ${this.type}\n`;
  }
}

class SortType {
  constructor(collectionName) {
    this.collectionName = collectionName;
    this.sortFields = [];
    this.typeName = `${collectionName}Sort`;
  }

  addSortField(fieldName) {
    this.sortFields.push(new SortFieldType(this.collectionName, fieldName));
  }

  isSortable() {
    return this.sortFields.length > 0;
  }

  toString() {
    let result = `input ${this.typeName} {\n`;
    this.sortFields.forEach(field => {
      result += field.toString();
    });
    return `${result}}\n`;
  }
}

/* eslint-disable no-new */
class Type {
  constructor(collectionName) {
    this.collectionName = collectionName;
    this.name = formatTypeName(collectionName);
    this.searchFunctionName = makePlural(typeNametoFieldName(this.name));
    this.fields = {};
    this.filter = filterSchema.createFilterType(this.name);
    this.sort = new SortType(this.name);
  }

  createFields(typeSchema, ids, supressStandardFields) {
    ids.forEach(id => {
      if (['_key', 'external_id'].includes(id)) {
        // add support for virtual key field which resolves to _key or external_id depending on the collection
        new VirtualKeyField(id, this);
        this.sort.addSortField('key');
      } else {
        new IDField(id, this);
      }
    });
    if (!supressStandardFields) this.createStandardFields();

    for (const item in typeSchema.properties) {
      if (ids.includes(item)) continue;
      if (arangDbHiddenFields.includes(item)) continue;
      if (!this.fields[item]) new JsonSchemaField(item, this, typeSchema.properties[item]);
      if (typeSchema.properties[item].graphql_filter_attribute) {
        this.filter.addFilterItem(item, this.fields[item].type);
      }
      if (typeSchema.properties[item].graphql_globalfilter_attribute) {
        filterSchema.filterTypes.global.addFilterItem(item, this.fields[item].type);
      }
      if (typeSchema.properties[item].graphql_sort_attribute) {
        this.sort.addSortField(item);
      }
    }

    if (typeSchema.required)
      typeSchema.required.forEach(item => {
        if (this.fields[item]) this.fields[item].required = true;
      });

    arangDbHiddenFields.forEach(name => {
      if (!this.fields[name]) new HiddenField(name, this);
    });
  }

  createStandardFields() {
    new CustomPropertiesField(this);
  }

  addEdgeField(edgeType, edgeDirection, edgeCollectionName, targetType, cardinalityEstimate) {
    let fieldName = makePlural(typeNametoFieldName(edgeType.name));

    // make field name shorter by removing 'this' type name from it
    const index = fieldName.toLowerCase().indexOf(this.name.toLowerCase());
    fieldName = fieldName.slice(0, index) + fieldName.slice(index + this.name.length);
    fieldName = makeFirstCharLowerCase(fieldName);

    const costDirective = cardinalityEstimate
      ? `@cost(complexity: ${cardinalityEstimate})`
      : '@cost(complexity: 0, multipliers: ["limit"])';
    const field = new Field(
      fieldName,
      this,
      `Default nested items = ${defaultNestedLimit}, use limit filter to adjust`,
      costDirective
    );
    field.type = edgeType.name;
    field.isArray = true;
    field.required = true;
    field.isEdgeField = true;
    field.isOutgoingEdge = edgeDirection;
    field.collectionName = edgeCollectionName;
    field.targetCollectionName = targetType.collectionName;
    if (edgeType.filter)
      field.arguments.push(new FieldArgument('filter', edgeType.filter.typeName, false));
    field.arguments.push(
      new FieldArgument(
        'limit',
        'Int',
        false,
        false,
        `Default = ${defaultNestedLimit}`,
        defaultNestedLimit
      )
    );
    field.arguments.push(new FieldArgument('offset', 'Int', false, false));
    if (targetType.sort.isSortable()) {
      field.arguments.push(new FieldArgument('orderBy', edgeType.sort.typeName, true, false));
    }
  }

  addEdgeTargetField(targetType, edgeDirection, edgeCollectionName, cardinalityEstimate) {
    const fieldName = makePlural(typeNametoFieldName(targetType.name));
    const costDirective = cardinalityEstimate
      ? `@cost(complexity: ${cardinalityEstimate})`
      : '@cost(complexity: 0, multipliers: ["limit"])';
    const field = new Field(
      fieldName,
      this,
      `Default nested items = ${defaultNestedLimit}, use limit filter to adjust`,
      costDirective
    );
    field.type = targetType.name;
    field.isArray = true;
    field.required = true;
    field.isEdgeTargetField = true;
    field.isOutgoingEdge = edgeDirection;
    field.edgeCollectionName = edgeCollectionName;
    field.targetCollectionName = targetType.collectionName;
    if (targetType.filter)
      field.arguments.push(new FieldArgument('filter', targetType.filter.typeName, false));
    field.arguments.push(
      new FieldArgument(
        'limit',
        'Int',
        false,
        false,
        `(Default = ${defaultNestedLimit})`,
        defaultNestedLimit
      )
    );
    field.arguments.push(new FieldArgument('offset', 'Int', false, false));
    if (targetType.sort.isSortable()) {
      field.arguments.push(new FieldArgument('orderBy', targetType.sort.typeName, true, false));
    }
  }

  fieldsToString() {
    let res = '';
    for (const field in this.fields)
      if (!this.fields[field].hidden) res += `  ${this.fields[field].toString()}\n`;
    return res;
  }

  mapFields(doc) {
    const keys = Array.from(Object.keys(doc));
    keys.forEach(key => {
      for (const fieldName in this.fields) {
        const field = this.fields[fieldName];
        if (key === field.jsonSchemaName) {
          const value = doc[key];
          delete doc[key];
          doc[field.name] = value;
        }
      }
    });
    return doc;
  }

  customProperties(doc, ids, isInclude) {
    const res = {};
    doc = this.mapFields(doc);
    Object.keys(doc).forEach(key => {
      let predefinedProperty = false;
      for (const fieldName in this.fields) {
        if (key === fieldName) {
          predefinedProperty = true; // this comes from the schema, so not a custom property
          break;
        }
      }
      if (
        !predefinedProperty &&
        (ids.length === 0 || (ids.includes(key) && isInclude) || (!ids.includes(key) && !isInclude))
      )
        res[key] = doc[key];
    });
    return res;
  }

  toString() {
    let result = `type ${this.name} {\n${this.fieldsToString()}}\n`;
    if (this.sort.isSortable()) {
      result += this.sort.toString();
    }
    return result;
  }
}

class EdgeType extends Type {
  createFields(typeSchema) {
    super.createFields(typeSchema, ['_id', '_from', '_to']);
  }

  createStandardFields() {
    new SourceField(this);
    if (this.name.indexOf('Report') === -1) new ReportField(this);
    new CustomPropertiesField(this);
  }

  addTypeField(typeName) {
    return new TypeField(typeName, this);
  }
}

class GraphQLSchema {
  load() {
    this.types = {};
    this.edgeTypes = {};
    this.filterTypes = filterSchema.filterTypes;

    filterSchema.createCustomPropertyFilterType();

    for (const typeName in coreSchema.vertices) {
      const type = new Type(typeName);
      type.createFields(
        coreSchema.vertices[typeName],
        coreSchema.vertices[typeName].usesExternalId ? ['external_id'] : ['_key']
      );
      this.types[type.name] = type;
      filterSchema.createDefaultFilterItem(type.name);
    }

    for (const typeName in coreSchema.edges) {
      this.handleEdge(typeName, coreSchema.edges[typeName]);
    }
  }

  handleEdge(edgeCollectionName, edgeSchema) {
    if (edgeSchema.isMultidirectional)
      this.handleMultidirectionalEdge(edgeCollectionName, edgeSchema);
    else this.createEdge(edgeSchema.source, edgeSchema.targets[0], edgeCollectionName, edgeSchema);
  }

  handleMultidirectionalEdge(edgeCollectionName, edgeSchema) {
    edgeSchema.targets.forEach(target => {
      this.createEdge(edgeSchema.source, target, edgeCollectionName, edgeSchema);
    });
  }

  createEdge(sourceVertex, targetVertex, edgeCollectionName, typeSchema) {
    const typeName1 = formatTypeName(sourceVertex);
    const typeName2 = formatTypeName(targetVertex);
    const edgeName = `${typeName1}${typeName2}Edge`;
    const edgeType = new EdgeType(edgeName, typeSchema);
    this.edgeTypes[edgeName] = edgeType;
    edgeType.createFields(typeSchema);

    const edgeTargetField1 = edgeType.addTypeField(typeName1);
    edgeTargetField1.isEdgeTargetField = true;
    edgeTargetField1.targetIdField = '_from';
    // Do not need the filter

    const edgeTargetField2 = edgeType.addTypeField(typeName2);
    edgeTargetField2.isEdgeTargetField = true;
    edgeTargetField2.targetIdField = '_to';
    // Do not need the

    const type1 = this.types[typeName1];
    const type2 = this.types[typeName2];
    const cardinality = typeSchema.cardinality || {};
    type1.addEdgeField(
      edgeType,
      EdgeDirection.OUTGOING,
      edgeCollectionName,
      type2,
      cardinality.out
    );
    type1.addEdgeTargetField(type2, EdgeDirection.OUTGOING, edgeCollectionName, cardinality.out);
    type2.addEdgeField(edgeType, EdgeDirection.INCOMING, edgeCollectionName, type1, cardinality.in);
    type2.addEdgeTargetField(type1, EdgeDirection.INCOMING, edgeCollectionName, cardinality.in);
  }

  toString() {
    let res =
      'directive @cost(complexity: Int = 1, useMultipliers: Boolean, multipliers: [String]) on FIELD_DEFINITION\n';
    res += 'type Query {\n';
    for (const typeName in this.types) {
      const type = this.types[typeName];
      if (type.searchFunctionName) {
        res += searchFunction(type.searchFunctionName, typeName, type.filter, type.sort) + '\n';
      }
    }
    res += '}\n\n';

    scalarTypes.forEach(type => (res += `scalar ${type}\n`));
    res += 'enum SortDirection { asc, desc }\n';

    for (const typeName in this.types) res += this.types[typeName].toString() + '\n';
    for (const typeName in this.edgeTypes) res += this.edgeTypes[typeName].toString() + '\n';
    for (const typeName in this.filterTypes) res += this.filterTypes[typeName].toString() + '\n';
    return res;
  }
}

const graphQLSchema = new GraphQLSchema();
for (const typeName in coreSchema.vertices) {
  const typeSchema = coreSchema.vertices[typeName];
  if (typeSchema.graphql_name) typeNameMapping[typeName.toLowerCase()] = typeSchema.graphql_name;
}
graphQLSchema.load();
// Uncomment to see the generated schema
// console.log(graphQLSchema.toString());

module.exports = {
  graphQLSchema,
  formatTypeName,
  typeNametoFieldName,
  searchFunction,
  defaultLimit,
};
