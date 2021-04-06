const _ = require('lodash');

const commonProperties = {
  source: {
    type: 'string',
    description: 'the source id',
  },

  external_id: {
    type: 'string',
    description: 'external identifier',
    required: true,
  },

  id: {
    type: 'string',
    required: true,
  },

  name: {
    description: 'searchable name',
    type: 'string',
  },

  connecting_id: {
    type: 'string',
  },

  reported_at: {
    type: 'Date',
    required: true,
  },

  _verified: {
    type: 'boolean',
  },

  _t1: {
    type: 'Date',
    required: true,
  },

  _t2: {
    type: 'Date',
    required: true,
  },

  _created_at: {
    description: 'time when the record was created, epoch in milliseconds',
    type: 'Date',
    required: true,
    default: "(now() at time zone 'utc')",
  },

  _modified_at: {
    description:'last time when the record was updated, epoch in milliseconds',
    type: 'Date',
    required: true,
    default: "(now() at time zone 'utc')",
  },
};

let commonVertexProperties = {
  exclude: []
};

const commonEdgeProperties = {
  exclude: [ 'id', 'connecting_id', 'name' ],
  external_id: {
    type: 'string',
    description: 'external identifier',
  },
};

const SchemaTemplate = {
  vertices: {
    source: {
      hasCommonProperties: false,
      properties: {
        id: {
          type: 'string',
          required: true,
          unique: true,
        },
        name: {
          description: 'name of a source',
          type: 'string',
        },
        description: {
          description: 'source description',
          type: 'string',
        },
        product_link: {
          description: 'product link',
          type: 'string',
        },
      },
    },

    asset: {
      properties: {
        name: {
          description: 'name of an asset',
          type: 'string',
        },
        business_value: {
          description: 'business value of the asset, should be a number of a scale 1 to 10',
          type: 'numeric(18, 10)',
        },
        risk: {
          description: 'risk related to the asset should be a number (float) from 1 - 10',
          type: 'numeric(18, 10)',
        },
        description: {
          description: 'description for asset',
          type: 'string',
        },
        asset_type: {
          description: 'type for asset',
          type: 'string',
        },
      },
    },

    container: {
      properties: {
        name: {
          description: 'name of the container',
          type: 'string',
        },
        image: {
          description: 'image of the container',
          type: 'string',
        },
      },
    },

    ipaddress: {
      properties: {
        name: {
          type: 'INET',
          required: true,
        },
        region_id: {
          type: 'string',
          required: true,
        },
      },
    },

    ipregion: {
      hasCommonProperties: false,
      properties: {
        source: {
          type: 'string',
          description: 'the source id',
        },
        external_id: {
          type: 'string',
          description: 'external identifier',
          required: true,
        },
        id: {
          type: 'string',
          required: true,
        },
        connecting_id: {
          type: 'string',
        },
        name: {
          description: 'name of the IP address region',
          type: 'string',
        },
      },
    },

    user: {
      properties: {
        username: {
          description: 'username',
          type: 'string',
        },
        fullname: {
          description: 'full name',
          type: 'string',
        },
        job_title: {
          description: 'job_title',
          type: 'string',
        },
        email: {
          description: 'email',
          type: 'string',
        },
        description: {
          description: 'user description',
          type: 'string',
        },
        role: {
          description: 'role of the user',
          type: 'string',
        },
        family_name: {
          description: 'The family name of the user, or typically the last name in most western languages.',
          type: 'string',
        },
        given_name: {
          description: 'The given name of the user, or typically the first name in most western languages.',
          type: 'string',
        },
        upn: {
          description: 'upn',
          type: 'string',
        },
        user_category: {
          description: 'User Category - employee, vendor, customer, etc',
          type: 'string',
        },
        title: {
          description: 'Title for person',
          type: 'string',
        },
        employee_id: {
          description: 'User Code - employee number',
          type: 'string',
        },
        active: {
          description: 'True if the person is active',
          type: 'boolean',
        },
        department: {
          description: 'department name',
          type: 'string',
        },
        modified: {
          description: 'Last time when data source definition was modified. epoch in milliseconds',
          type: 'number',
        },
        cumulative_score: {
          description: 'Overall Risk score',
          type: 'number',
        },
        current_score: {
          description: 'Risk score from recent risk analysis',
          type: 'number',
        },
        critical: {
          description: 'number of critical severity violations',
          type: 'number',
        },
        high: {
          description: 'number of high severity violations',
          type: 'number',
        },
        medium: {
          description: 'number of medium severity violations',
          type: 'number',
        },
        low: {
          description: 'number of low severity violations',
          type: 'number',
        },
        first_occurrence: {
          description: 'Epoch Time when first risk was seen',
          type: 'number',
        },
        last_occurrence: {
          description: 'Epoch Time when latest risk was seen',
          type: 'number',
        },
      },
    },

    account: {
      properties: {
        name: {
          description: 'name of account',
          type: 'string',
        },
        created: {
          description: 'creation date (ms since epoch)',
          type: 'number',
        },
        active: {
          description: 'True if the account is active',
          type: 'boolean',
        },
        compliance_status: {
          description: 'True if the account is compliant',
          type: 'boolean',
        },
        modified: {
          description: 'Last time when account was modified. ms since epoch',
          type: 'number',
        },
        cumulative_score: {
          description: 'Overall Risk score',
          type: 'number',
        },
        current_score: {
          description: 'Risk score from recent risk analysis',
          type: 'number',
        },
        critical: {
          description: 'number of critical severity violations',
          type: 'number',
        },
        high: {
          description: 'number of high severity violations',
          type: 'number',
        },
        medium: {
          description: 'number of medium severity violations',
          type: 'number',
        },
        low: {
          description: 'number of low severity violations',
          type: 'number',
        },
        first_occurrence: {
          description: 'Epoch Time when first risk was seen',
          type: 'number',
        },
        last_occurrence: {
          description: 'Epoch Time when latest risk was seen',
          type: 'number',
        },
      },
    },

    application: {
      properties: {
        name: {
          description: 'name',
          type: 'string',
        },
        description: {
          description: 'application description',
          type: 'string',
        },
        cpe: {
          description: 'cpe',
          type: 'string',
        },
        is_os: {
          type: 'boolean',
          description: 'True if the application is an operating system',
        },
        owner: {
          description: 'name of an application owner',
          type: 'string',
        },
        owner_code: {
          description: 'employee id of owner',
          type: 'string',
        },
        last_access_time: {
          description: 'time when application was last accessed (ms since epoch)',
          type: 'number',
        },
        threat_score: {
          type: 'number',
          description: 'threat score for application from X-Force',
        },
        app_type: {
          description: 'application type',
          type: 'string',
        },
        cumulative_score: {
          description: 'Overall Risk score',
          type: 'number',
        },
        current_score: {
          description: 'Risk score from recent risk analysis',
          type: 'number',
        },
        critical: {
          description: 'number of critical severity violations',
          type: 'number',
        },
        high: {
          description: 'number of high severity violations',
          type: 'number',
        },
        medium: {
          description: 'number of medium severity violations',
          type: 'number',
        },
        low: {
          description: 'number of low severity violations',
          type: 'number',
        },
        first_occurrence: {
          description: 'Epoch Time when first risk was seen',
          type: 'number',
        },
        last_occurrence: {
          description: 'Epoch Time when latest risk was seen',
          type: 'number',
        },
          status: {
          description: 'Application status',
          type: 'string',
        },
      },
    },

    hostname: {
      properties: {
        name: {
          description: 'searchable name',
          type: 'string',
          required: true,
        },
      },
    },

    businessprocess: {
      properties: {
        name: {
          description: 'name of the business process',
          type: 'string',
        },
        description: {
          description: 'businsess process description',
          type: 'string',
        },
      },
    },

    database: {
      properties: {
        name: {
          description: 'name of the database',
          type: 'string',
        },
        description: {
          description: 'database description',
          type: 'string',
        },
        type: {
          description: 'database engine type',
          type: 'string',
        },
        modified: {
          description: 'Last time when data source definition was modified. epoch in milliseconds',
          type: 'number',
        },
        protocol: {
          description: 'Database protocol',
          type: 'string',
        },
        port: {
          description: 'Database server port',
          type: 'string',
        },
        datasource_name: {
          description: 'datasource name',
          type: 'string',
        },
      },
    },

    macaddress: {
      properties: {
        name: {
          description: 'searchable name',
          type: 'MACADDR',
          required: true,
        },

        interface: {
          description: 'interface',
          type: 'string',
        },
      },
    },

    port: {
      properties: {
        port_number: {
          description: 'port number',
          type: 'integer',
        },
        status: {
          description: 'port status',
          type: 'string',
        },
        protocol: {
          description: 'protocol',
          type: 'string',
        },
        description: {
          description: 'port description',
          type: 'string',
        },
      },
    },

    vulnerability: {
      properties: {
        external_properties: {
          description: 'external_properties',
          type: 'string',
        },
        external_reference: {
          description: 'external_reference',
          type: 'string',
        },
        name: {
          description: 'name',
          type: 'string',
        },
        base_score: {
          description: 'base_score',
          type: 'number',
        },
        description: {
          description: 'vulnerability description',
          type: 'string',
        },
        disclosed_on: {
          description: 'disclosed_on: epoch in milliseconds',
          type: 'bigint',
        },
        published_on: {
          description: 'published_on: epoch in milliseconds',
          type: 'bigint',
        },
        updated_on: {
          description: 'updated_on: epoch in milliseconds',
          type: 'bigint',
        },
      },
    },

    geolocation: {
      properties: {
        region: {
          description: 'name of region the asset is located in',
          type: 'string',
        },
        longitude: {
          type: 'Float',
          description: 'longitude',
        },
        latitude: {
          type: 'Float',
          description: 'latitude',
        },
        description: {
          description: 'geolocation description',
          type: 'string',
        },
      },
    },

    tag: {
      properties: {
        name: {
          description: 'searchable name',
          type: 'string',
          required: true,
        },
        _reference_count: {
          type: 'bigint',
        },
      },
    },
  },

  edges: {
    asset_vulnerability: {
      properties: {
        port_number: {
          description: 'port number',
          type: 'number',
        },
        port_protocol: {
          description: 'protocol',
          type: 'string',
        },
        port_status: {
          description: 'active if the port is in use, inactive otherwise',
          type: 'string',
        },
        risk_score: {
          description: 'use risk score on the edge if you need to override the vulnerability base score value',
          type: 'numeric(18, 10)',
        },
      },
    },

    asset_ipaddress: {},
    asset_macaddress: {},
    asset_hostname: {},
    asset_account: {},
    asset_container: {},
    asset_application: {},
    asset_database: {},
    asset_geolocation: {},
    application_port: {},
    account_application: {
      properties: {
        user_id: {
          description: 'user id of person who owns account',
          type: 'string',
        },
        last_access_time: {
          description: 'time when application was last accessed (ms since epoch)',
          type: 'number',
        },
      },
    },
    application_ipaddress: {
    	 properties: {
    	    mappingtype: {
         		description: 'Mapping Relationship between Ip address and Application',
	          type: 'string',
	        }
        }
    },
    businessprocess_application: {},
    businessprocess_account: {},
    application_database: {},
    application_vulnerability: {},
    database_ipaddress: {},
    database_vulnerability: {
      properties: {
        version_level: {
          description: 'Database version level',
          type: 'string',
        },
        patch_level: {
          description: 'Database patch level',
          type: 'string',
        },
        full_version_info: {
          description: 'Database full version info',
          type: 'string',
        },
        result_text: {
          description: 'Test result text',
          type: 'string',
        },
        recommendation: {
          description: 'Recommendation',
          type: 'string',
        },
        severity: {
          description: 'severity',
          type: 'string',
        },
        category: {
          description: 'Test Category',
          type: 'string',
        },
        assessment_description: {
          description: 'Vulnerability Assessment Description',
          type: 'string',
        },
        result_details: {
          description: 'Test result details',
          type: 'string',
        },
      },
    },
    ipaddress_container: {},
    ipaddress_macaddress: {},
    ipaddress_hostname: {},
    ipaddress_vulnerability: {},
    ipaddress_geolocation: {},
    ipaddress_port: {},

    user_account: {
      properties: {
        last_access_time: {
          description: 'time when account was last accessed (ms since epoch)',
          type: 'number',
        },
      },
    },
    account_database: {},
    account_hostname: {},
    account_ipaddress: {
      properties: {
        total_risk_score: {
          description: 'Total Risk Score',
          type: 'number',
        },
        threat_analytics_score: {
          description: 'Threat analytics Score',
          type: 'number',
        },
        violations_score: {
          description: 'Violations Score',
          type: 'number',
        },
        vulnerability_score: {
          description: 'Vulnerability Score',
          type: 'number',
        },
        sensitive_objects_score: {
          description: 'Sensitive Objects Score',
          type: 'number',
        },
        select_queries_score: {
          description: 'Select Queries Score',
          type: 'number',
        },
        ddl_queries_score: {
          description: 'DDL Queries Score',
          type: 'number',
        },
        dml_queries_score: {
          description: 'DML Queries Score',
          type: 'number',
        },
        administrative_queries_score: {
          description: 'Administrative Queries Score',
          type: 'number',
        },
        high_volume_activity_score: {
          description: 'High Volume Activity Score',
          type: 'number',
        },
        off_work_activity_score: {
          description: 'Off Work Activity Score',
          type: 'number',
        },
        group_state_description: {
          description: 'Group State Description',
          type: 'string',
        },
      },
    },

    port_vulnerability: {},

    tag_asset: {},
    tag_container: {},
    tag_ipaddress: {},
    tag_ipregion: {},
    tag_user: {},
    tag_account: {},
    tag_application: {},
    tag_hostname: {},
    tag_businessprocess: {},
    tag_database: {},
    tag_macaddress: {},
    tag_port: {},
    tag_vulnerability: {},
    tag_geolocation: {},
  },
};

class Entity {
  isVertex() {
    return this.name.indexOf('_') === -1;
  }

  isEdge() {
    return !this.isVertex();
  }
}

class Vertex extends Entity {
}

class Edge extends Entity {
  ends() {
    const end1 = this.name.split('_')[0];
    const end2 = this.name.split('_')[1];
    return [end1, end2];
  }
}

class CoreSchema {
  constructor() {
    this.version = '4';
    this.vertices = {};
    this.edges = {};

    const exclude = commonVertexProperties.exclude;
    commonVertexProperties = Object.assign({}, commonProperties);
    for (const key of exclude) delete commonVertexProperties[key];

    for (const [vertexName, template] of Object.entries(SchemaTemplate.vertices)) {
      const vertexDef = new Vertex();
      vertexDef.hasCommonProperties = (template.hasCommonProperties === undefined || template.hasCommonProperties === true);
      vertexDef.name = vertexName;
      vertexDef.edges = {};
      vertexDef.relatedVertices = {};
      const props = template.properties || {};
      if (vertexDef.hasCommonProperties) {
        Object.keys(commonVertexProperties).forEach(item => {
          if (!props[item]) props[item] = commonVertexProperties[item];
        });
      }
      vertexDef.properties = props;
      this.vertices[vertexName] = vertexDef;
    };

    let edgeProperties = _.assign({}, commonProperties);
    edgeProperties = _.assign(edgeProperties, commonEdgeProperties);
    for (const key of commonEdgeProperties.exclude) delete edgeProperties[key];
    delete edgeProperties.exclude;

    for (const [edgeName, template] of Object.entries(SchemaTemplate.edges)) {
      const edgeDef = new Edge();
      edgeDef.hasCommonProperties = (template.hasCommonProperties === undefined || template.hasCommonProperties === true);
      edgeDef.name = edgeName;
      const props = template.properties || {};
      const parts = edgeName.split('_');
      const source = parts[0];
      const target = parts[1];
      Object.keys(edgeProperties).forEach(item => {
        if (!props[item]) props[item] = edgeProperties[item];
      });
      edgeDef.properties = props;
      this.edges[edgeName] = edgeDef;

      this.setRelations(edgeName, source, target, edgeDef);
    };

    this.allVertexNames().forEach(vertexName => {
      const vertex = this.vertices[vertexName];
      vertex.edges = Object.keys(vertex.edges);
      vertex.relatedVertices = Object.keys(vertex.relatedVertices);
    });
    this.allEdgeNames().forEach(edgeName => {
      const edge = this.edges[edgeName];
      edge.targets = Object.keys(edge.targets);
    });
  }

  allVertexNames() {
    return Object.keys(this.vertices);
  }

  allEdgeNames() {
    return Object.keys(this.edges);
  }

  allCollections() {
    return Object.values(this.vertices).concat(Object.values(coreSchema.edges));
  }

  edgeDefinitions() {
    const res = [];
    this.allEdgeNames().forEach(edgeName => {
      const edge = this.edges[edgeName];
      res.push({ collection: edgeName, from: [edge.source], to: edge.targets });
    });
    return res;
  }

  setRelations(edgeName, source, target, edgeDef) {
    if (!edgeDef.targets) edgeDef.targets = {};
    edgeDef.source = source;
    edgeDef.targets[target] = null;

    this.vertices[source].edges[edgeName] = null;
    this.vertices[target].edges[edgeName] = null;

    if (!this.vertices[source].relatedVertices) this.vertices[source].relatedVertices = {};
    if (!this.vertices[target].relatedVertices) this.vertices[target].relatedVertices = {};
    this.vertices[source].relatedVertices[target] = null;
    this.vertices[target].relatedVertices[source] = null;
  }

  isVertex(collectionName) {
    return collectionName.indexOf('_') === -1;
  }

  isEdge(collectionName) {
    return !this.isVertex(collectionName);
  }

  isCompatibleDataVersion(dataVersion) {
    return this.version === dataVersion;
  }

  entities() {
    return Object.assign({}, this.vertices, this.edges);
  }
}

if (!global.coreSchema) global.coreSchema = new CoreSchema();
const coreSchema = global.coreSchema;

// Uncomment to see the generated schema in the log
// const stdutil = require('util')
// console.log('res: ' + stdutil.inspect(coreSchema, true, 6));

module.exports = coreSchema;
