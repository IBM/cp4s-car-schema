const swaggerAutogen = require ('swagger-autogen') ();
const asset_data = require ('../../functional-test/tests/data/data-graph.json');
const converter = require ('swagger2openapi');
const fs = require ('fs');
const sourceFile = './doc/generated/swagger.json';

const servers = [
  {
    description: 'SaaS tenant',
    url: 'https://{tenant}.cp4s.cloud.ibm.com/api/car',
    variables: {
      tenant: {
        description: 'tenant name',
        default: 'example',
      },
    },
  },
  {
    description: 'SaaS dev tenant',
    url: 'https://{tenant}.cp4s.dev.cloud.ibm.com/api/car',
    variables: {
      tenant: {
        description: 'tenant name',
        default: 'example',
      },
    },
  },
  {
    description: 'custom host',
    url: 'https://{host}/api/car',
    variables: {
      host: {
        description: 'fully qualified hostname',
        default: 'example.com',
      },
    },
  },
];

const doc = {
  swagger: '2.0',
  basePath: `/api/car`,
  host: 'host:3000',
  info: {
    title: 'CAR API.',
    version: '3.0.0',
  },
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header', // can be 'header', 'query' or 'cookie'
      name: 'Authorization', // name of the header, query parameter or cookie
      description: 'JWT',
    },
  },
  consumes: ['application/json'],
  produces: ['application/json'],
  definitions: {
    status: {
      success: true,
      complete_imports: [
        {
          status: 'COMPLETE',
          id: '7d3a8e0c-e2ca-4a40-9625-58f327bbffd7-dev-account1-asset',
        },
      ],
      incomplete_imports: [],
      notfound_imports: [],
      error_imports: [],
    },
    data: asset_data,

    source: {
      source: {
        _key: 'Source1',
        name: 'stable-tor01-vm-sa-dataexplorer.qradar.ibmcloud-dev.com',
        description: 'reports coming from source Source1',
      },
    },
    databases: {
      databases: [{is_ready: true}],
    },
    importResult: {
      id: '7d3a8e0c-e2ca-4a40-9625-58f327bbffd7-dev-account1-asset',
      job_id: '7d3a8e0c-e2ca-4a40-9625-58f327bbffd7-dev-account1-asset',
      status: 'INPROGRESS',
      message: 'Check the status of the import by calling the endpoint GET {api}/importstatus/{status_id} or GET {api}/importstatus?ids={status_id1},{status_id2}, etc',
    },
    queryResult: {
      data: "{ asset: [ { name: 'Daniel Laptop', source: 'e26afaa8b54048bea87b4ac09b536bbf' }],}",
    },

    querybody: {
      query: '{ asset (where: {name: {_eq: "Daniel Laptop"}}) { name source } }',
    },

    DataRetentionPolicy: {
      policy_name: 'DiskUsage',
      policy_value: 3000000,
    },

    mutationResult: {
      data: {
        update_xxx: {
          affected_rows: 1,
        },
      },
    },
    health: {
      message: 'ok',
    },
    health_all: {
      status: 200,
      hasura: {
        status: 200,
        message: 'OK',
      },
      postgres: {
        message: 'OK',
      },
      redis: {
        status: 200,
        message: 'OK',
      },
    },
    commonResult: {
      result: 'OK',
    },
    collection: 'asset',
  },
  paths: {},
  tags: [{name: 'assets'}, {description: 'qradar assets', name: 'qradar'}],
};

const outputFile = './doc/generated/swagger.json';
const endpointsFiles = [
  './src/legacyApi/endpoints.ts',
  './src/bulkImport/endpoints.ts',
  './src/app.ts',
  './src/graphql/endpoint.ts',
];

swaggerAutogen (outputFile, endpointsFiles, doc).then (() => {
  console.log ('Converting...');
  converter.convertFile (
    './doc/generated/swagger.json',
    {
      encoding: 'utf8',
      rbname: '',
      warnProperty: 'x-s2o-warning',
      outfile: './doc/generated/swagger3.json',
    },
    processResult
  );
  console.log ('Done');
});

function processResult (err, options) {
  if (err) {
    delete err.options;
    console.warn (err);
    return (process.exitCode = 1);
  }
  if (
    options.yaml &&
    options.outfile &&
    options.outfile.indexOf ('.json') > 0
  ) {
    options.yaml = false;
  }
  if (
    !options.yaml &&
    options.outfile &&
    options.outfile.indexOf ('.yaml') > 0
  ) {
    options.yaml = true;
  }

  // Replace the server paragraph
  options.openapi.servers = servers;
  let s;
  try {
    if (options.yaml) {
      s = yaml.stringify (options.openapi); // removed noRefs here
    } else {
      s = JSON.stringify (options.openapi, null, options.indent || 4);
    }
  } catch (ex) {
    console.warn (
      'The result cannot be represented safely in the chosen output format'
    );
    s = '{}';
  }

  if (options.outfile) {
    // replace the server clause
    fs.writeFileSync (options.outfile, s, options.encoding || 'utf8');
    fs.unlinkSync (sourceFile);
  } else {
    console.log (s);
  }

  if (options.components) {
    console.warn (
      JSON.stringify (options.externals, null, options.indent || 4)
    );
  }
}
