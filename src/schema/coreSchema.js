/* eslint-disable camelcase */

const index__external_id__source = { type: 'persistent', unique: true, sparse: true, fields: ['external_id', 'source'] };
const index__from__source__active = { type: 'persistent', fields: ['_from', 'source', 'active'] };  
const index__source = { type: 'persistent', fields: ['source'] };  
const index__from__to__source = { type: 'persistent', unique: false, sparse: true, deduplicate: false, fields: ['_from', '_to', 'source'] }; 

const defaultEdgeIndexes = [index__from__source__active, index__source];

const defaultVertexIndexes = [index__external_id__source];

const commonVertexProperties = {
  _created: {
    // format: 'date-time',
    type: 'number',
    description: 'epoch in milliseconds, created time',
    import_schema: false,
    graphql_type: 'Date',
    graphql_filter_attribute: true,
    graphql_globalfilter_attribute: true,
    graphql_sort_attribute: true,
  },
  _modified: {
    // format: 'date-time',
    type: 'number',
    description:'epoch in milliseconds, updated time',
    import_schema: false,
    graphql_type: 'Date',
    graphql_filter_attribute: true,
    graphql_globalfilter_attribute: true,
    graphql_sort_attribute: true,
  },
  _number_of_active_edges: {
    type: 'number',
    import_schema: false,
    graphql_hidden: true,
  },
  tag: {
    type: 'array',
    items: { type: 'string' },
    description: 'Tags to add to the document. When tag array property is provided, tags that are in this array will be added. If tag is not provided or empty then no updates/inserts of tags will occur.'
  },
  untag: {
    type: 'array',
    items: { type: 'string' },
    description: 'Tags to remove from the document. When untag array property is provided, tags that are in this array will be removed from the document. If untag property is empty or not provided then no removal of tags will occur.'
  }
};

const commonEdgeProperties = {
  isActivatable: true, // this means that the edge has 'active' property which controls its enables/disabled state
  properties: {
    created: {
      // format: 'date-time',
      type: 'number',
      description: 'epoch in milliseconds',
      graphql_name: 'created',
      graphql_type: 'Date',
    },
    modified: {
      // format: 'date-time',
      type: 'number',
      description:
        'this field should be missed when there is no update and should contain the last modified timestamp when there is an update ',
      graphql_name: 'modified',
      graphql_type: 'Date',
    },
    report: {
      type: 'string',
      description: 'the report _key',
    },
    source: {
      type: 'string',
      description: 'the source _key',
      graphql_filter_attribute: true,
      graphql_sort_attribute: true,
    },
    external_id: {
      type: 'string',
      description: 'external identifier if exists',
    },
    _created: {
      // format: 'date-time',
      type: 'number',
      description: 'epoch in milliseconds, created time',
      graphql_filter_attribute: true,
      graphql_globalfilter_attribute: true,
      graphql_sort_attribute: true,
      import_schema: false,
      graphql_type: 'Date',
    },
    _modified: {
      // format: 'date-time',
      type: 'number',
      description:'epoch in milliseconds, updated time',
      graphql_filter_attribute: true,
      graphql_globalfilter_attribute: true,
      graphql_sort_attribute: true,
      import_schema: false,
      graphql_type: 'Date',
    },
    _deleted: {
      // format: 'date-time',
      type: 'number',
      description:'epoch in milliseconds, disabled time ',
      graphql_filter_attribute: true,
      graphql_sort_attribute: true,
      import_schema: false,
      graphql_type: 'Date',
    },
  },
};

const SchemaTemplate = {
  vertices: {
    asset: {
      usesExternalId: true,
      properties: {
        _key: {
          description: 'auto generated key',
          type: 'string',
          import_schema: false,
          graphql_sort_attribute: true,
        },
        name: {
          description: 'name of an asset',
          type: 'string',
          graphql_filter_attribute: true,
          search_index: true,
          graphql_sort_attribute: true,
        },
        business_value: {
          description: 'business value of the asset, should be a number of a scale 1 to 10',
          type: ['number', 'null'],
          graphql_sort_attribute: true,
        },
        risk: {
          description: 'risk related to the asset should be a number (float) from 1 - 10',
          type: ['number', 'null'],
          graphql_sort_attribute: true,
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
      usesExternalId: true,
      properties: {
        _key: {
          description: 'auto generated key',
          type: 'string',
          import_schema: false,
          graphql_sort_attribute: true,
        },
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
      usesExternalId: false,
      graphql_name: 'IpAddr',
      properties: {
        _key: {
          description: 'ipv4 or ipv6 address',
          type: 'string',
          graphql_sort_attribute: true,
        },
      },
    },

    unifieduser: {
      isInternal: true,
      graphql_name: 'UnifiedUser',
      properties: {
        _key: {
          description: 'auto generated key',
          type: 'string',
          graphql_sort_attribute: true,
        }
      },
      import_schema: false,
    },

    user: {
      usesExternalId: true,
      properties: {
        _key: {
          description: 'auto generated key',
          type: 'string',
          import_schema: false,
          graphql_sort_attribute: true,
        },
        external_id: {
          description: 'the external identifier',
          type: 'string',
          graphql_sort_attribute: true,
        },
        username: {
          description: 'username',
          type: 'string',
        },
        fullname: {
          description: 'full name',
          type: 'string',
          graphql_filter_attribute: true,
          graphql_sort_attribute: true,
          search_index: true,
        },
        job_title: {
          description: 'job_title',
          type: 'string',
          graphql_sort_attribute: true,
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
          graphql_filter_attribute: true,
          graphql_sort_attribute: true,
          search_index: true
        },
        active: {
          description: 'True if the person is active',
          type: 'boolean',
        },
        department: {
          description: 'department name',
          type: 'string',
          graphql_filter_attribute: true,
          graphql_sort_attribute: true,
        },
        modified: {
          description: 'Last time when data source definition was modified. epoch in milliseconds',
          type: 'number',
        },
        cumulative_score: {
          description: 'Overall Risk score',
          type: 'number',
          graphql_sort_attribute: true,
        },
        current_score: {
          description: 'Risk score from recent risk analysis',
          type: 'number',
          graphql_sort_attribute: true,
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

    unifiedaccount: {
      isInternal: true,
      graphql_name: 'UnifiedAccount',
      properties: {
        _key: {
          description: 'auto generated key',
          type: 'string',
          graphql_sort_attribute: true,
        },
        name: {
          description: 'name of account',
          type: 'string',
          graphql_filter_attribute: true,
          graphql_sort_attribute: true,
          search_index: true
        },
      },
      import_schema: false,
    },

    account: {
      usesExternalId: true,
      properties: {
        _key: {
          description: 'auto generated key',
          type: 'string',
          graphql_sort_attribute: true,
          import_schema: false
        },
        name: {
          description: 'name of account',
          type: 'string',
          graphql_filter_attribute: true,
          graphql_sort_attribute: true,
          search_index: true
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
          graphql_sort_attribute: true,
        },
        current_score: {
          description: 'Risk score from recent risk analysis',
          type: 'number',
          graphql_sort_attribute: true,
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
      usesExternalId: true,
      properties: {
        _key: {
          description: 'auto generated key',
          type: 'string',
          import_schema: false,
          graphql_sort_attribute: true,
        },
        name: {
          description: 'name',
          type: 'string',
          graphql_filter_attribute: true,
          graphql_sort_attribute: true,
          search_index: true
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
          graphql_sort_attribute: true,
        },
        threat_score: {
          type: 'number',
          description: 'threat score for application from X-Force',
          graphql_sort_attribute: true,
        },
        app_type: {
          description: 'application type',
          type: 'string',
        },
        cumulative_score: {
          description: 'Overall Risk score',
          type: 'number',
          graphql_sort_attribute: true,
        },
        current_score: {
          description: 'Risk score from recent risk analysis',
          type: 'number',
          graphql_sort_attribute: true,
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

    hostname: {
      usesExternalId: false,
      properties: {
        _key: {
          description: 'a unique key which should be the hostname',
          type: 'string',
          graphql_sort_attribute: true,
        },
      },
    },

    database: {
      usesExternalId: true,
      properties: {
        _key: {
          description: 'auto generated key',
          type: 'string',
          graphql_sort_attribute: true,
          import_schema: false
        },
        name: {
          description: 'name of the database',
          type: 'string',
          graphql_filter_attribute: true,
          graphql_sort_attribute: true,
          search_index: true
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
      usesExternalId: false,
      graphql_name: 'MacAddr',
      properties: {
        _key: {
          description:
            'a unique key i.e. the macaddress of system with ‘:’ format (e.g. 01:23:45:67:89:AB)',
          type: 'string',
          graphql_sort_attribute: true,
        },
        interface: {
          description: 'interface',
          type: 'string',
        },
      },
    },

    report: {
      usesExternalId: false,
      properties: {
        _key: {
          description: 'a unique key of the report that needs to be provided',
          type: 'string',
          graphql_sort_attribute: true,
        },
        type: {
          description: 'type of the report',
          type: 'string',
        },
        parameters: {
          description: 'parameters',
          type: 'string',
        },
        value: {
          description: 'value',
          type: 'string',
        },
        created: {
          // format: 'date-time',
          type: 'number',
          description: 'epoch in milliseconds',
          graphql_name: 'modified',
          graphql_type: 'Date',
        },
        description: {
          description: 'report description',
          type: 'string',
        },
      },
    },

    port: {
      usesExternalId: true,
      properties: {
        _key: {
          description: 'auto generated key',
          type: 'string',
          graphql_sort_attribute: true,
          import_schema: false
        },
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

    source: {
      usesExternalId: false,
      properties: {
        _key: {
          description:
            'a unique key of the source that needs to be provided. This is an identifier of the source',
          type: 'string',
          graphql_sort_attribute: true,
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

    vulnerability: {
      usesExternalId: true,
      properties: {
        _key: {
          description: 'auto generated key',
          type: 'string',
          graphql_sort_attribute: true,
          import_schema: false
        },
        external_properties: {
          description: 'external_properties',
          type: 'integer',
        },
        external_reference: {
          description: 'external_reference',
          type: 'string',
        },
        name: {
          description: 'name',
          type: 'string',
          search_index: true,
          graphql_sort_attribute: true,
        },
        base_score: {
          description: 'base_score',
          type: 'number',
          graphql_sort_attribute: true,
        },
        description: {
          description: 'vulnerability description',
          type: 'string',
        },
        disclosed_on: {
          description: 'disclosed_on: epoch in milliseconds',
          type: 'number',
        },
        published_on: {
          description: 'published_on: epoch in milliseconds',
          type: 'number',
        },
        updated_on: {
          description: 'updated_on: epoch in milliseconds',
          type: 'number',
        },
      },
    },

    tag: {
      isInternal: true,
      import_schema: false,
      usesExternalId: false,
      properties: {
        _key: {
          description: 'a unique key of the source that needs to be provided. This is an identifier of the tag ',
          type: 'string',
          graphql_sort_attribute: true,
        },
      },
    },

    geolocation: {
      usesExternalId: true,
      properties: {
        _key: {
          description: 'auto generated key',
          type: 'string',
          graphql_sort_attribute: true,
          import_schema: false
        },
        region: {
          description: 'name of region the asset is located in',
          type: 'string',
        },
        longitude: {
          description: 'longitude',
          type: 'number',
        },
        latitude: {
          description: 'latitude',
          type: 'number',
        },
        description: {
          description: 'geolocation description',
          type: 'string',
        },
      },
    },
  },

  edges: {
    asset_vulnerability: {
      properties: {
        port: {
          type: 'object',
          properties: {
            port_number: {
              description: 'port number',
              type: 'number',
            },
            protocol: {
              description: 'protocol',
              type: 'string',
            },
            status: {
              description: 'active if the port is in use, inactive otherwise',
              type: 'string',
            },
          },
        },
        risk_score: {
          description:
            'use risk score on the edge if you need to override the vulnerability base score value',
          type: ['number', 'null'],
          graphql_sort_attribute: true,
        },
      },
      indexes: [index__external_id__source].concat(defaultEdgeIndexes),
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
          description:
            'user id of person who owns account',
          type: 'string',
        },
        last_access_time: {
          description:
            'time when application was last accessed (ms since epoch)',
          type: 'number',
        },
      },
    },
    application_database: {},
    application_vulnerability: {},

    database_ipaddress: {},
    database_vulnerability: {
      properties: {
        version_level: {
          description:
            'Database version level',
          type: 'string',
        },
        patch_level: {
          description:
            'Database patch level',
          type: 'string',
        },
        full_version_info: {
          description:
            'Database full version info',
          type: 'string',
        },
        result_text: {
          description:
            'Test result text',
          type: 'string',
        },
        recommendation: {
          description:
            'Recommendation',
          type: 'string',
        },
        severity: {
          description:
            'severity',
          type: 'string',
          graphql_sort_attribute: true,
        },
        category: {
          description:
            'Test Category',
          type: 'string',
        },
        assessment_description: {
          description:
            'Vulnerability Assessment Description',
          type: 'string',
        },
        result_details: {
          description:
            'Test result details',
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
          description:
            'time when account was last accessed (ms since epoch)',
          type: 'number',
          graphql_sort_attribute: true,
        },
      },
    },
    account_database: {},
    account_hostname: {},
    account_ipaddress: {
      properties: {
        total_risk_score: {
          description:
            'Total Risk Score',
          type: 'number',
          graphql_sort_attribute: true,
        },
        threat_analytics_score: {
          description:
            'Threat analytics Score',
          type: 'number',
        },
        violations_score: {
          description:
            'Violations Score',
          type: 'number',
        },
        vulnerability_score: {
          description:
            'Vulnerability Score',
          type: 'number',
        },
        sensitive_objects_score: {
          description:
            'Sensitive Objects Score',
          type: 'number',
        },
        select_queries_score: {
          description:
            'Select Queries Score',
          type: 'number',
        },
        ddl_queries_score: {
          description:
            'DDL Queries Score',
          type: 'number',
        },
        dml_queries_score: {
          description:
            'DML Queries Score',
          type: 'number',
        },
        administrative_queries_score: {
          description:
            'Administrative Queries Score',
          type: 'number',
        },
        high_volume_activity_score: {
          description:
            'High Volume Activity Score',
          type: 'number',
        },
        off_work_activity_score: {
          description:
            'Off Work Activity Score',
          type: 'number',
        },
        group_state_description: {
          description:
            'Group State Description',
          type: 'string',
        },
      },
    },

    unifiedaccount_account: {},

    unifieduser_user: {},

    port_vulnerability: {},

    tag_edge: { import_schema: false, exclude: ['source', 'report'], indexes: [index__from__to__source] },
  },
};

class CoreSchema {
  constructor() {
    this.version = '2';
    this.vertices = SchemaTemplate.vertices;
    this.edges = SchemaTemplate.edges;

    // Add common properties to vertices
    Object.keys(SchemaTemplate.vertices).forEach(vertexName => {
      const vertexDef = this.vertices[vertexName];
      vertexDef.name = vertexName;
      vertexDef.edges = {};
      vertexDef.relatedVertices = {};
      const props = vertexDef.properties || {};
      Object.keys(commonVertexProperties).forEach(item => {
        props[item] = commonVertexProperties[item];
      });
      vertexDef.properties = props;

      if (vertexDef.usesExternalId) {
        vertexDef.properties.external_id = {
          description: 'a unique id of the object in the system source',
          type: 'string',
        };
        vertexDef.properties.source = {
          description: 'the source _key',
          type: 'string',
          import_schema: false,
          graphql_filter_attribute: true,
        };
      }
      if (!vertexDef.indexes) vertexDef.indexes = defaultVertexIndexes;
    });

    Object.keys(SchemaTemplate.edges).forEach(edgeName => {
      const edgeDef = this.edges[edgeName];
      edgeDef.name = edgeName;
      const props = edgeDef.properties || {};
      const parts = edgeName.split('_');
      const source = parts[0];
      const target = parts[1];
      Object.keys(commonEdgeProperties).forEach(item => {
        if (edgeDef[item] === undefined) edgeDef[item] = commonEdgeProperties[item];
      });
      Object.keys(commonEdgeProperties.properties).forEach(item => {
        if (item !== source && item !== target) props[item] = commonEdgeProperties.properties[item];
      });
      if (edgeDef.isActivatable) {
        props.active = {
          type: 'boolean',
          description: 'True if the edge is active, false if the edge is disabled',
          graphql_hidden: true,
        };
      }
      edgeDef.properties = props;

      if (!edgeDef.indexes) edgeDef.indexes = defaultEdgeIndexes;

      this.setRelations(edgeName, source, target, edgeDef);
    });

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

  activatableEdges() {
    return Object.keys(this.edges).filter(edgeName => this.edges[edgeName].isActivatable);
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
    if (target === 'edge') {
      edgeDef.isMultidirectional = true;
      return this.handleMultidirectionalEdge(edgeName, source, edgeDef);
    }

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

  handleMultidirectionalEdge(edgeName, source, edgeDef) {
    Object.keys(this.vertices).forEach(target => {
      if (source === target) return;
      if (edgeDef.exclude && edgeDef.exclude.includes(target)) return;
      this.setRelations(edgeName, source, target, edgeDef);
    });
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
}

if (!global.coreSchema) global.coreSchema = new CoreSchema();
const coreSchema = global.coreSchema;

// Uncomment to see the generated schema
// const stdutil = require('util')
// console.log('res: ' + stdutil.inspect(coreSchema, true, 6));

module.exports = { coreSchema };
