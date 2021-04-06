const { coreSchema } = require('../../schema/coreSchema');
const { defaultSeperator, operators, defaultFilterItems } = require('./filterSchema');
const { UserInputError } = require('apollo-server-express');

const defaultConjunction = 'AND';
const defaultDocAliasPrefix = 'doc.';
const defaultLimit = 100;
const defaultNestedLimit = 10;

const extractFieldAndOperator = function (filterKey) {
  const position = filterKey.lastIndexOf(defaultSeperator);
  return {
    field: filterKey.slice(0, position + 1).slice(0, position),
    operator: filterKey.slice(position + 1),
  };
};

const resolveIdentity = (collection, field) => {
  if (field in defaultFilterItems) {
    if (coreSchema.vertices[collection].usesExternalId) return 'external_id';
    if (coreSchema.vertices[collection].key) return coreSchema.vertices[collection].key;
    return '_key';
  } else return field;
};

//  Now only use it in like operator
const escape = (source) => {
  return source
    .replace(/\\/g, '\\\\')
    .replace(/_/g, '\\_')
    .replace(/%/g, '\\%')
    .replace(/'/g, "\\'");
};

const clearupDuplicatedConjunction = (filter, separator) => {
  return `${filter.slice(0, filter.lastIndexOf(separator))}`;
};

const resolveFilterItem = (filterItemKey, filterItemValue, context) => {
  const fieldAndOp = extractFieldAndOperator(filterItemKey);
  fieldAndOp.field = resolveIdentity(context.collectionName, fieldAndOp.field);
  let value = new Value(filterItemValue, context, fieldAndOp.field);
  if (fieldAndOp.operator in operators.LOGICIAL) {
    context.inherited.push(context.dataSources.dbKeyWordsMapping[fieldAndOp.operator]);
    return new LogicialFilterItem(filterItemValue, context).resolve();
  } else {
    context.propertyCount += 1;
    if (fieldAndOp.operator in operators.INCLUDE)
      value = new ArrayValue(filterItemValue, context, fieldAndOp.field);
    if (fieldAndOp.operator in operators.MATCH)
      value = new MatchValue(filterItemValue, context, fieldAndOp.field);
    return new FilterItem(
      new Field(resolveIdentity(context.collectionName, fieldAndOp.field), context),
      new Operator(fieldAndOp.operator, context),
      value,
      context
    ).resolve();
  }
};

class FilterItem {
  constructor(field, operator, value, context) {
    this.field = field;
    this.operator = operator;
    this.value = value;
    this.context = context;
  }

  resolve() {
    return `${this.field.resolve()} ${this.operator.resolve()} ${this.value.resolve()} ${
      this.context.inherited[this.context.inherited.length - 1]
    } `;
  }
}

class LogicialFilterItem {
  constructor(values, context) {
    this.values = values;
    this.context = context;
  }

  resolve() {
    let res = `${this.context.dataSources.dbKeyWordsMapping.ENFORCESEQUENCESTART} `;
    if (!Array.isArray(this.values)) this.values = [this.values];
    this.values.forEach((value) => {
      Object.keys(value).forEach((key) => {
        res += `${resolveFilterItem(key, value[key], this.context)}`;
      });
    });
    res = clearupDuplicatedConjunction(
      res,
      this.context.inherited[this.context.inherited.length - 1]
    );
    res += `${this.context.dataSources.dbKeyWordsMapping.ENFORCESEQUENCEEND} `;
    this.context.inherited.pop();
    return `${res} ${this.context.inherited[this.context.inherited.length - 1]} `;
  }
}

class Field {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }

  resolve() {
    if (!this.name) return '';
    return `${defaultDocAliasPrefix}${this.name}`;
  }
}

class Operator {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }

  resolve() {
    if (!this.name) return '';
    return this.context.dataSources.dbKeyWordsMapping[this.name];
  }
}

class Value {
  constructor(values, context, filedName) {
    this.values = values;
    this.context = context;
    this.filedName = filedName;
  }

  resolve() {
    const binparameterName = `${this.filedName}_${this.context.propertyCount}`;
    this.context.bindParam[binparameterName] = this.values;
    return `@${binparameterName}`;
  }
}

class ArrayValue extends Value {
  resolve() {
    if (!Array.isArray(this.values)) this.values = [this.values];
    const binparameterName = `${this.filedName}_${this.context.propertyCount}`;
    this.context.bindParam[binparameterName] = this.values;
    return `@${binparameterName}`;
  }
}

class MatchValue extends Value {
  resolve() {
    const binparameterName = `${this.filedName}_${this.context.propertyCount}`;
    this.context.bindParam[binparameterName] = `${
      this.context.dataSources.dbKeyWordsMapping.MATCH
    }${escape(this.values)}${this.context.dataSources.dbKeyWordsMapping.MATCH}`;
    return `@${binparameterName}`;
  }
}
class Context {
  constructor(dataSources, collectionName) {
    this.inherited = [dataSources.dbKeyWordsMapping[defaultConjunction]];
    this.dataSources = dataSources;
    this.collectionName = collectionName;
    this.bindParam = [];
    this.propertyCount = 0;
  }
}

class FilterResolver {
  constructor(collectionName, filter, dataSources, limit, offset, orderBy) {
    this.context = new Context(dataSources.arangoDbDataSource, collectionName);
    this.limit = limit || defaultLimit;
    this.offset = offset;
    this.filter = filter;
    this.sort = orderBy;
  }

  resolveLimit() {
    if (this.limit) {
      const limitParameterName = `limit_${this.context.propertyCount + 1}`;
      this.context.bindParam[limitParameterName] = this.limit;
      if (this.offset) {
        const offsetParameterName = `offset_${this.context.propertyCount + 1}`;
        this.context.bindParam[offsetParameterName] = this.offset;
        return `LIMIT @${offsetParameterName}, @${limitParameterName}`;
      } else {
        return ` LIMIT @${limitParameterName}`;
      }
    }
    return '';
  }

  resolveSort() {
    let sortStatement = '';
    if (this.sort) {
      const statements = [];
      let sortParamCount = 0;
      this.sort.forEach((sortOptionObj) => {
        const sortOptionKeys = Object.keys(sortOptionObj);
        if (sortOptionKeys.length !== 1) {
          throw new UserInputError(
            'Invalid sort option: Each sort option in the orderBy list should be a single {name: direction} object.',
            { invalidArgs: sortOptionObj }
          );
        }
        const sortOption = resolveIdentity(this.context.collectionName, sortOptionKeys[0]);
        const sortDirection = Object.values(sortOptionObj)[0];
        sortParamCount += 1;
        const sortParamName = `sort_${sortParamCount}`;
        if (sortDirection === 'asc') {
          statements.push(`${defaultDocAliasPrefix}@${sortParamName} ASC`);
          this.context.bindParam[sortParamName] = sortOption;
        } else if (sortDirection === 'desc') {
          statements.push(`${defaultDocAliasPrefix}@${sortParamName} DESC`);
          this.context.bindParam[sortParamName] = sortOption;
        }
      });
      if (statements.length > 0) {
        sortStatement = `SORT ${statements.join(',')}`;
      }
    }
    return sortStatement;
  }

  async resolve() {
    if (this.context.dataSources.context.globalFilter) {
      if (this.filter)
        Object.keys(this.context.dataSources.context.globalFilter).forEach((globalFilterItem) => {
          this.filter[globalFilterItem] = this.context.dataSources.context.globalFilter[
            globalFilterItem
          ];
        });
      else this.filter = this.context.dataSources.context.globalFilter;
    }
    let res = '';
    if (this.filter) {
      Object.keys(this.filter).forEach((key) => {
        res += resolveFilterItem(key, this.filter[key], this.context);
      });
      res = `${clearupDuplicatedConjunction(
        res,
        this.context.inherited[this.context.inherited.length - 1]
      )}`;
    }

    if (res.length === 0 && !this.limit) {
      // If no filters and no limit are provided, default to 100 as limit
      this.limit = defaultLimit;
      this.offset = 0;
    }
    return {
      filterString: res,
      bindParam: this.context.bindParam,
      limit: this.resolveLimit(),
      sort: this.resolveSort(),
    };
  }

  async resolveCustomPropertiesFilter() {
    const res = {};
    let ids = [];
    if (!this.filter || Object.keys(this.filter).length === 0) res.include = ids;
    else if (Object.keys(this.filter.filter).length > 1)
      throw new Error('Only one custom property filter item can be applied as same time.');
    else
      Object.keys(this.filter.filter).forEach((key) => {
        if (!Array.isArray(this.filter.filter[key])) ids.push(this.filter.filter[key]);
        else ids = ids.concat(this.filter.filter[key]);
        const fieldAndOp = extractFieldAndOperator(key);
        if (
          (fieldAndOp.operator in operators.GENERIC &&
            operators.GENERIC[fieldAndOp.operator].lastIndexOf('NOT') >= 0) ||
          (fieldAndOp.operator in operators.INCLUDE &&
            operators.INCLUDE[fieldAndOp.operator].lastIndexOf('NOT') >= 0)
        )
          res.exclude = ids;
        else res.include = ids;
      });
    return res;
  }
}

module.exports = {
  FilterResolver,
  defaultLimit,
  defaultNestedLimit,
};
