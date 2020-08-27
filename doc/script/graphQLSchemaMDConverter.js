const graphQLSchema = require('../../src/graphql/graphqlSchema');
const wrapperSchmema = require('../wrapper/WrapperSchema');
const converter = require('./mdConverter');
const title = 'GraphQL Schema';

class graphQLSchemaMDCoverter extends converter.MDConverter {
  constructor() {
    super(wrapperSchmema.graphQLMDWrapper, graphQLSchema.graphQLSchema, title);
  }

  convert() {
    const graphQLQueryNode = new converter.MdNode(
      'Query',
      false,
      new converter.MdWrapper(this.mdWrapperSchema.title.APItype.wrapper)
    );
    graphQLQueryNode.children = graphQLQueryNode.children.concat(
      this.createGraphQLEndPointsMD(this.schema.types, this.mdWrapperSchema.title.APItype.endpoint)
    );
    this.mdNode.children.push(graphQLQueryNode);

    const graphQLTypeNode = new converter.MdNode(
      'GraphQL Types',
      false,
      new converter.MdWrapper(this.mdWrapperSchema.title.types.wrapper)
    );
    graphQLTypeNode.children = graphQLTypeNode.children.concat(
      this.createGraphQLTypesMD(this.schema, this.mdWrapperSchema.title.types.type)
    );

    this.mdNode.children.push(graphQLTypeNode);
    return super.convert();
  }

  createGraphQLEndPointsMD(endPoints, wrapper) {
    const endPointsMD = [];
    for (const typeName in endPoints) {
      if (endPoints[typeName].searchFunctionName !== undefined)
        endPointsMD.push(this.createGraphQLEndPointMD(endPoints[typeName], wrapper));
    }
    return endPointsMD;
  }

  createGraphQLEndPointMD(collection, wrapper) {
    const endpontMD = new converter.MdNode(
      collection.name,
      false,
      new converter.MdWrapper(wrapper.wrapper)
    );
    endpontMD.children.push(this.createEndPointArgumentNode(collection, wrapper.arguments));
    endpontMD.children.push(
      this.createTypeNode(collection.name, { isArray: true }, wrapper.return)
    );
    return endpontMD;
  }

  createEndPointArgumentNode(collection, wrapper) {
    const argumentsNode = new converter.MdNode('', false, new converter.MdWrapper(wrapper.wrapper));
    let argumentContent = graphQLSchema
      .searchFunction(
        collection.searchFunctionName,
        collection.collectionName,
        collection.filter,
        collection.sort
      )
      .replace(/[\r\n]/gm, '');
    argumentContent = argumentContent.match(/("{3}.+"{3}.+\)):/)[1];
    const argumentAndComments = argumentContent.split(/\"{3}/g);
    const comments = [];
    argumentAndComments.forEach(argument => {
      // remove directives
      argument = argument.replace(/\s+@.*$/, '');
      // remove defaults
      argument = argument.replace(/\s+=\s+\w+/, '');
      argument = argument.substr(0, argument.length - 1).trim();
      if (argument.length == 0) return;
      if (argument.match(/:{1}\s{1}/g) === null) comments.push(argument);
      else {
        const arguName = argument.slice(0, argument.indexOf(':') + 1);
        let arguType = argument.slice(argument.indexOf(':') + 1).trim();
        let arguLinkType = arguType;
        if (arguType.indexOf(']') >= 0) {
          arguLinkType = arguType.replace(/^\[|\]$/g, '').trim();
          arguType = `[${arguLinkType}]`;
        }
        const argumentNode = new converter.MdNode(
          [arguName, arguType, arguLinkType],
          false,
          new converter.MdWrapper(wrapper.argument.wrapper)
        );
        while (comments.length > 0) {
          argumentNode.children.push(
            new converter.MdNode(
              comments.pop(),
              false,
              new converter.MdWrapper(wrapper.argument.comment.wrapper)
            )
          );
        }
        argumentsNode.children.push(argumentNode);
      }
    });
    return argumentsNode;
  }

  createGraphQLTypesMD(graphTypes, wrapper) {
    const graphTypeMD = [];
    for (const typeName in graphTypes.types) {
      graphTypeMD.push(this.createGraphQLTypeMD(graphTypes.types[typeName], wrapper));
    }
    for (const typeName in graphTypes.edgeTypes) {
      graphTypeMD.push(this.createGraphQLTypeMD(graphTypes.edgeTypes[typeName], wrapper));
    }
    for (const typeName in graphTypes.filterTypes) {
      graphTypeMD.push(this.createGraphQLFilterTypeMD(graphTypes.filterTypes[typeName], wrapper));
    }
    for (const typeName in graphTypes.types) {
      if (graphTypes.types[typeName].sort.isSortable()) {
        graphTypeMD.push(this.createGraphQLSortTypeMD(graphTypes.types[typeName].sort, wrapper));
      }
    }
    for (const typeName in graphTypes.edgeTypes) {
      if (graphTypes.edgeTypes[typeName].sort.isSortable()) {
        graphTypeMD.push(
          this.createGraphQLSortTypeMD(graphTypes.edgeTypes[typeName].sort, wrapper)
        );
      }
    }
    graphTypeMD.push(this.createGraphQLSortDirectionMD(wrapper));
    return graphTypeMD;
  }

  createGraphQLSortTypeMD(type, wrapper) {
    const typeNode = new converter.MdNode(
      type.typeName,
      false,
      new converter.MdWrapper(wrapper.wrapper)
    );
    type.sortFields.forEach(field => {
      const fieldNode = new converter.MdNode(
        field.name,
        false,
        new converter.MdWrapper(wrapper.properties.wrapper)
      );
      Object.keys(field).forEach(key => {
        const detail = this.createDetailMD(key, field, wrapper.properties);
        if (detail) {
          fieldNode.children.push(detail);
        }
      });
      typeNode.children.push(fieldNode);
    });
    return typeNode;
  }

  createGraphQLSortDirectionMD(wrapper) {
    const sortDirectionNode = new converter.MdNode(
      'SortDirection',
      false,
      new converter.MdWrapper(wrapper.wrapper)
    );
    const details = new converter.MdNode(
      'asc | desc',
      false,
      new converter.MdWrapper(wrapper.properties.enum.wrapper)
    );
    sortDirectionNode.children.push(details);
    return sortDirectionNode;
  }

  createGraphQLFilterTypeMD(type, wrapper) {
    const typeNode = new converter.MdNode(
      type.typeName,
      false,
      new converter.MdWrapper(wrapper.wrapper)
    );
    Object.keys(type.filterItems).forEach(field => {
      const fieldContent = type.filterItems[field];
      fieldContent.operators.forEach(operator => {
        let separator = '';
        if (fieldContent.name.length > 0) separator = '_';
        const fieldNode = new converter.MdNode(
          `${fieldContent.name}${separator}${operator.name}`,
          false,
          new converter.MdWrapper(wrapper.properties.wrapper)
        );
        Object.keys(operator).forEach(key => {
          fieldNode.children.push(this.createDetailMD(key, operator, wrapper.properties));
        });
        typeNode.children.push(fieldNode);
      });
    });
    return typeNode;
  }

  createGraphQLTypeMD(type, wrapper) {
    const typeNode = new converter.MdNode(
      type.name,
      false,
      new converter.MdWrapper(wrapper.wrapper)
    );
    Object.keys(type.fields).forEach(field => {
      const fieldContent = type.fields[field];
      if (fieldContent.hidden) return;
      const fieldNode = new converter.MdNode(
        fieldContent.name,
        false,
        new converter.MdWrapper(wrapper.properties.wrapper)
      );
      Object.keys(fieldContent).forEach(field => {
        if (
          wrapper.properties[field] !== undefined &&
          (typeof fieldContent[field] !== 'object' || fieldContent[field].length > 0)
        )
          fieldNode.children.push(this.createDetailMD(field, fieldContent, wrapper.properties));
      });
      typeNode.children.push(fieldNode);
    });
    return typeNode;
  }

  createDetailMD(name, details, wrapper) {
    if (!wrapper[name]) return;
    const detailsWrapper = wrapper[name];
    if (name === 'type') return this.createTypeNode(details[name], details, detailsWrapper);

    if (name === 'arguments' && details[name] != undefined) {
      const detailNode = new converter.MdNode(
        'Arguments',
        false,
        new converter.MdWrapper(detailsWrapper.wrapper)
      );
      details[name].forEach(argument => {
        const argumentNode = new converter.MdNode(
          argument.name,
          false,
          new converter.MdWrapper(detailsWrapper.argument.wrapper)
        );
        Object.keys(argument).forEach(argumentProperty => {
          if (detailsWrapper.argument[argumentProperty] != undefined)
            argumentNode.children.push(
              this.createDetailMD(argumentProperty, argument, detailsWrapper.argument)
            );
        });
        detailNode.children.push(argumentNode);
      });
      return detailNode;
    } else
      return new converter.MdNode(
        details[name],
        false,
        new converter.MdWrapper(detailsWrapper.wrapper)
      );
  }

  createTypeNode(typeName, content, wrapper) {
    let name = typeName;
    if (content.isArray) name = `[${name}]`;
    if (content.required) name = `${name}!`;
    const typeNode = new converter.MdNode(
      [name, typeName],
      false,
      new converter.MdWrapper(wrapper.wrapper)
    );
    return typeNode;
  }
}

const graphQLMD = new graphQLSchemaMDCoverter().convert();
module.exports = { graphQLMD };
