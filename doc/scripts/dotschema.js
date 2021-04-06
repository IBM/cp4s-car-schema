const coreSchema = require ('../../src/schema/coreSchema');
const graphTypes = {
  GRAPH: 'graph',
  SUBGRAPH: 'subgraph',
  DIGRAPH: 'digraph',
};

const objectTypes = {
  VERTEX: 'Vertex',
  EDGE: 'Edge',
};

const layouts = {
  DETAIL_LAYOUT: 3,
  GRAPH_LAYOUT: 2,
  MAIN_LAYOUT: 1,
};

const parallalNumber = 7;

class Node {
  constructor (nodeName, objectType = objectTypes.VERTEX) {
    this.attributes = [];
    this.id = nodeName;
    this.shape = 'record';
    this.type = 'node type';
    this.objectType = objectType;
  }

  attributesToString () {
    let result = '{';
    this.attributes.forEach (attribute => {
      result += attribute.toString ();
    });
    return result.substr (0, result.lastIndexOf ('|'));
  }

  toString () {
    return `"${this.id}" [id="${this.id}", type="${this.type}", shape="${this.shape}", label="${this.objectType} | {${this.id} | ${this.attributesToString ()}}}"];\n`;
  }
}
class Edge extends Node {
  constructor (source, target, lable) {
    let nodeName = lable;
    if (lable === undefined) nodeName = `${source}_${target}`;
    else nodeName = lable;
    super (nodeName);
    this.label = nodeName;
    this.attributes = [];
    this.name = `"${source}" -- "${target}"`;
    this.source = source;
    this.relation = `${source} to ${target}`;
    this.target = target;
    this.directed = false;
  }

  toString () {
    return `${this.name} [source="${this.source}", target="${this.target}", relation="${this.relation}", directed="${this.directed}", label="${this.label}"];\n`;
  }
}

class Attribute {
  constructor (attributeName, isRequired) {
    if (!isRequired) this.name = attributeName;
    else this.name = `${attributeName}*`;
  }

  toString () {
    return `${this.name} | `;
  }
}

class Graph {
  constructor (properties, graphType, layout) {
    this.properties = properties;
    this.subGraphs = [];
    this.nodes = [];
    this.edges = [];
    this.graphType = graphType;
    this.layout = layout;
  }

  layoutToString () {
    switch (this.layout) {
      case layouts.DETAIL_LAYOUT:
        let numberOfParallalNodes = 0;
        let detailLayout = '';
        let previousNode = null;
        while (this.nodes.length) {
          let currentNode = this.nodes.pop ();
          if (previousNode != undefined)
            detailLayout += `${previousNode.id} -- ${currentNode.id} [style=invis]\n `;
          else numberOfParallalNodes = 0;
          previousNode = currentNode;
          numberOfParallalNodes++;
          if (numberOfParallalNodes === parallalNumber) previousNode = null;
        }
        return detailLayout;
      case layouts.GRAPH_LAYOUT:
        return;
      case layouts.MAIN_LAYOUT:
        return;
      default:
        return;
    }
  }
  toString () {
    let graphDot = `${this.graphType} cluster_${this.properties.label} {\n `;
    Object.keys (this.properties).forEach (key => {
      graphDot += key + '=' + this.properties[key] + ';\n';
    });
    this.nodes.forEach (node => {
      graphDot += node.toString ();
    });
    this.edges.forEach (edge => {
      graphDot += edge.toString ();
    });
    this.subGraphs.forEach (subgraph => {
      graphDot += subgraph.toString ();
    });
    graphDot += this.layoutToString () || '';
    return (graphDot += '}\n');
  }
}

class DotSchema {
  constructor () {
    this.graph = new Graph (
      {splines: 'line', label: 'Asset_Model', rankdir: 'LR'},
      graphTypes.GRAPH,
      layouts.MAIN_LAYOUT
    );
  }

  loadCoreSchema () {
    const vertexSubGraph = new Graph (
      {label: 'Vertices'},
      graphTypes.SUBGRAPH,
      layouts.GRAPH_LAYOUT
    );
    const edgesSubGraph = new Graph (
      {label: 'Edges'},
      graphTypes.SUBGRAPH,
      layouts.DETAIL_LAYOUT
    );
    this.graph.subGraphs.push (edgesSubGraph);
    this.graph.subGraphs.push (vertexSubGraph);
    for (const collectionName in coreSchema.vertices)
      vertexSubGraph.nodes.push (
        this.createNode (collectionName, coreSchema.vertices[collectionName])
      );

    for (const collectionName in coreSchema.edges) {
      vertexSubGraph.edges = vertexSubGraph.edges.concat (
        this.createEdge (collectionName, coreSchema.edges[collectionName])
      );
      edgesSubGraph.nodes.push (
        this.createNode (
          collectionName,
          coreSchema.edges[collectionName],
          objectTypes.EDGE
        )
      );
    }
  }

  createNode (typeName, nodeContent, objectType) {
    const node = new Node (typeName, objectType);
    return this.addAttributes (node, nodeContent);
  }

  createEdge (collectionName, collectionSchema) {
    if (collectionSchema.isMultidirectional)
      return this.handleMultidirectionalEdge (collectionName, collectionSchema);
    else
      return [new Edge (collectionSchema.source, collectionSchema.targets[0])];
  }

  addAttributes (node, nodeContent) {
    let required = [];
    const fields = nodeContent.properties || {};
    Object.keys (fields).forEach (filed => {
      let isRequired = false;
      if (required.indexOf (filed) != -1) isRequired = true;
      node.attributes.push (new Attribute (filed, isRequired));
    });
    return node;
  }

  handleMultidirectionalEdge (collectionName, collectionSchema) {
    const result = [];
    collectionSchema.targets.forEach (target => {
      result.push (new Edge (collectionSchema.source, target, collectionName));
    });
    return result;
  }

  toString () {
    return this.graph.toString ();
  }
}

const dotSchema = new DotSchema ();
dotSchema.loadCoreSchema ();
module.exports = {dotSchema};
