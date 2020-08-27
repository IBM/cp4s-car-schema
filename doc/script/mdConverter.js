const util = require('util');

class MdWrapper {
  constructor(format) {
    this.format = format;
  }

  wrapToString(mdNode) {
    return util.format.apply(util, [`${this.format} \n\n`].concat(mdNode.nodeName));
  }
}

class MdNode {
  constructor(nodeName, isArray, nodeWrapper = new wrapper('')) {
    this.nodeName = nodeName;
    this.wrapper = nodeWrapper;
    this.isArray = isArray;
    this.children = [];
  }

  toString() {
    let mdString = this.wrapper.wrapToString(this);
    this.children.forEach(node => {
      if (node) mdString += node.toString();
    });
    return mdString;
  }
}

class MDConverter {
  constructor(mdWrapperSchema, objectSchema, title) {
    this.mdWrapperSchema = mdWrapperSchema;
    this.schema = objectSchema;
    this.mdNode = new MdNode(title, false, new MdWrapper(mdWrapperSchema.title.wrapper));
  }

  convert() {
    return this.mdNode.toString();
  }
}

module.exports = { MDConverter, MdNode, MdWrapper };
