const importSchema = require('../../src/schema/importSchema');
const wrapperSchmema = require('../wrapper/WrapperSchema');
const converter = require('./mdConverter');
const title = 'Import Schema';

class ImportSchemaMDCoverter extends converter.MDConverter {
  constructor() {
    super(wrapperSchmema.importMdWrapper, importSchema.schema, title);
  }
  convert() {
    for (const importObjectName in this.schema.properties) {
      this.createImportObjectMD(
        importObjectName,
        this.schema.properties[importObjectName],
        this.mdWrapperSchema.title.properties
      );
    }
    return super.convert();
  }

  createImportObjectMD(objectName, objectContent, objectWrapper) {
    let isArray = false;
    const objectMDNode = new converter.MdNode(
      objectName,
      isArray,
      new converter.MdWrapper(objectWrapper.wrapper)
    );
    let propertyContent = objectContent.properties;
    let required = objectContent.required;
    if (objectContent.type === 'array') {
      isArray = true;
      propertyContent = objectContent.items.properties;
      required = objectContent.items.required;
    } else isArray = false;

    objectMDNode.children.push(
      new converter.MdNode(
        objectContent.type,
        isArray,
        new converter.MdWrapper(objectWrapper.type.wrapper)
      )
    );
    objectMDNode.children = objectMDNode.children.concat(
      this.createPropertiesMD(propertyContent, objectWrapper.property, required)
    );

    this.mdNode.children.push(objectMDNode);
  }

  createPropertiesMD(propertyContent, propertyWrapper, required) {
    const propertyMDNodes = [];
    Object.keys(propertyContent).forEach(property => {
      const propertyDetail = propertyContent[property];
      const propertyNode = new converter.MdNode(
        property,
        false,
        new converter.MdWrapper(propertyWrapper.wrapper)
      );
      Object.keys(propertyDetail).forEach(key => {
        const itemWrapper = propertyWrapper[key];
        if (itemWrapper != undefined)
          propertyNode.children.push(
            new converter.MdNode(
              propertyDetail[key].toString(),
              false,
              new converter.MdWrapper(itemWrapper.wrapper)
            )
          );
      });
      if (required != undefined && required.includes(property)) {
        propertyNode.children.push(
          new converter.MdNode(
            'true',
            false,
            new converter.MdWrapper(propertyWrapper.required.wrapper)
          )
        );
        propertyNode.nodeName = `${propertyNode.nodeName}*`;
      }
      propertyMDNodes.push(propertyNode);
    });
    return propertyMDNodes;
  }
}
const importMD = new ImportSchemaMDCoverter().convert();
module.exports = { importMD };
