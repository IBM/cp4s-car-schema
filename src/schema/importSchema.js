const { coreSchema } = require('./coreSchema');

var importSchemaTemplate = {
  $id: 'car.asset/schemas/schema.json',
  additionalProperties: true,
  type: 'object',
  collections: {
    asset: {
      required: ['name'],
    },

    container: {
      required: ['name'],
    },

    ipaddress: {
      properties: {
        _key: {
          description: 'ipv4 or ipv6 address',
          type: 'string',
          // regex for IPV4 and IPV6
          // pattern:
          //   '(^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$)|(?:[A-Fa-f0-9]{1,4}:){6}(?:[A-Fa-f0-9]{1,4}:[A-Fa-f0-9]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))',
          pattern: '^[a-fA-F0-9:\\.]+$',
          minLength: 1,
          maxLength: 254,
        },
      },
      required: ['_key'],
    },

    user: {
      properties: {
        email: {
          description: 'email',
          type: 'string',
          //  pattern:
          //   "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$",
        },
      },
      required: [],
    },

    account: {
      required: ['name'],
    },

    application: {
      required: ['name'],
    },

    hostname: {
      properties: {
        _key: {
          description: 'hostname',
          type: 'string',
          pattern: "^[a-zA-Z0-9_:@=;!'%\\-\\.\\(\\)\\+\\,\\$\\*]+$",
          minLength: 1,
          maxLength: 254,
        },
      },
      required: ['_key'],
    },

    database: {
      required: ['name'],
    },

    macaddress: {
      properties: {
        _key: {
          description:
            'a unique key i.e. the macaddress of system with ‘:’ format (e.g. 01:23:45:67:89:AB)',
          type: 'string',
          pattern:
            '^(?:[0-9A-Fa-f]{2}(:))(?:[0-9A-Fa-f]{2}\\1){4,6}(?:[0-9A-Fa-f]{2,4}){0,1}|(?:[0-9A-Fa-f]{4}(:)){3}(?:[0-9A-Fa-f]{4})$',
        },
      },
      required: ['_key'],
    },

    report: {
      notArray: true,
      properties: {
        _key: {
          description: 'a unique identifier for report',
          pattern: "^[a-zA-Z0-9_:@=;!'%\\-\\.\\(\\)\\+\\,\\$\\*]+$",
          minLength: 1,
          maxLength: 254,
        },
      },
      required: ['_key', 'type', 'created'],
    },

    port: {
      required: ['port_number', 'protocol'],
    },

    source: {
      notArray: true,
      properties: {
        _key: {
          description: 'a unique identifier for source',
          pattern: "^[a-zA-Z0-9_:@=;!'%\\-\\.\\(\\)\\+\\,\\$\\*]+$",
          minLength: 1,
          maxLength: 254,
        },
      },
      required: ['_key'],
    },

    vulnerability: {
      required: ['name'],
    },

    geolocation: {
      oneOf: [
        {
          required: ['longitude', 'latitude'],
        },
        {
          required: ['region'],
        },
      ],
      required: [],
    },
    businessprocess: {
      required: ['name'],
    },
  },
};

class ImportSchema {
  load() {
    this.schema = {};
    this.schema.properties = {};
    Object.keys(importSchemaTemplate).forEach((item) => {
      if (item !== 'collections') this.schema[item] = importSchemaTemplate[item];
    });
    this.generateVertices();
    this.generateEdges();
  }

  generateVertices() {
    Object.entries(coreSchema.vertices)
      .filter(([, vertex]) => vertex.import_schema !== false)
      .forEach(([vertexName]) => {
        let def, props, propsParent;
        if (!importSchemaTemplate.collections[vertexName]) {
          throw Error(`Collection ${vertexName} missing from importSchemaTemplate`);
        }
        if (importSchemaTemplate.collections[vertexName].notArray) {
          def = { type: 'object', properties: {} };
          props = def.properties;
          propsParent = def;
        } else {
          def = { type: 'array', items: { type: 'object', properties: {} } };
          props = def.items.properties;
          propsParent = def.items;
        }

        this.schema.properties[vertexName] = def;
        // prettier-ignore
        Object.keys(coreSchema.vertices[vertexName].properties)
          // eslint-disable-next-line no-prototype-builtins
          .filter(prop => !coreSchema.vertices[vertexName].properties[prop].hasOwnProperty('import_schema'))
          .forEach(prop => {
            props[prop] = coreSchema.vertices[vertexName].properties[prop];
          });
        Object.keys(importSchemaTemplate.collections[vertexName]).forEach((item) => {
          if (item !== 'properties')
            propsParent[item] = importSchemaTemplate.collections[vertexName][item];
        });

        if (importSchemaTemplate.collections[vertexName].properties)
          Object.keys(importSchemaTemplate.collections[vertexName].properties).forEach((prop) => {
            props[prop] = importSchemaTemplate.collections[vertexName].properties[prop];
          });

        if (coreSchema.vertices[vertexName].usesExternalId)
          propsParent.required.push('external_id');
      });
  }

  generateEdges() {
    const multidirectionalEdgeCollectionProperties = {
      _lookup_source_collection: {
        description: `
        This is an optional helper property. 
        - If this property is provided, the _from property will be used as external id.
          And the _from property (i.e. external id) is used to look for the _key property. And _key will be used as _from
          For example, {"_lookup_source_collection":"tag", "_from": "290578"}, external id "290578" will be used to find the _key.
        - If not provided, the _from property must be the _ID in the format "{collection}/{_key}"
        `,
        type: 'string',
      },
      _from: {
        description: `
        If _lookup_source_collection property is provided, the _from property will be used as external id. 
        If _lookup_source_collection property is not provded', _from is "{collection}/{_key}"
        `,
        type: 'string',
      },
      _lookup_target_collection: {
        description: `
        This is an optional helper property. 
        - If this property is provided, the _to property will be used as external id.
          And the _to property (i.e. external id) is used to look for the _key property. And _key will be used as _to
          For example, {"_lookup_source_collection":"tag", "_to": "290578"}, external id "290578" will be used to find the _key.
        - If not provided, the _to property must be the _ID in the format "{collection}/{_key}"
        `,
        type: 'string',
      },
      _to: {
        description: `
        If _lookup_target_collection property is provided, the _to property will be used as external id. 
        If _lookup_target_collection property is not provded', _to is "{collection}/{_key}"
        `,
        type: 'string',
      },
    };

    Object.entries(coreSchema.edges)
      .filter(([, edge]) => {
        return (
          coreSchema.vertices[edge.source].import_schema !== false && edge.import_schema !== false
        );
      })
      .forEach(([edgeName, edge]) => {
        const def = { type: 'array', items: { type: 'object', properties: {} } };
        const props = def.items.properties;
        const propsParent = def.items;
        this.schema.properties[edgeName] = def;
        Object.keys(edge.properties).forEach((prop) => {
          props[prop] = edge.properties[prop];
        });

        const source = edge.source;
        const target = edge.targets[0];

        let required = ['created', 'active', 'report', 'source'];
        if (
          this.schema.properties[source].items &&
          this.schema.properties[source].items.properties.external_id
        ) {
          required.push('_from_external_id');
          props._from_external_id = { type: 'string' };
        } else {
          required.push('_from');
          props._from = { type: 'string', pattern: `^${source}/*` };
        }

        if (edge.isMultidirectional) {
          for (const prop in multidirectionalEdgeCollectionProperties)
            props[prop] = multidirectionalEdgeCollectionProperties[prop];
        } else {
          if (
            this.schema.properties[target] &&
            this.schema.properties[target].items &&
            this.schema.properties[target].items.properties.external_id
          ) {
            required.push('_to_external_id');
            props._to_external_id = { type: 'string' };
          } else {
            required.push('_to');
            props._to = { type: 'string', pattern: `^${target}/*` };
          }
        }

        required = required.filter((item) => item !== source && item !== target);
        propsParent.required = required;
      });
  }
}

if (!global.importSchema) {
  global.importSchema = new ImportSchema();
  global.importSchema.load();

  // Uncomment to see the generated schema
  // const stdutil = require('util');
  // console.log(stdutil.inspect(global.importSchema.schema, true, 10));
}
const importSchema = global.importSchema;
module.exports = importSchema;
