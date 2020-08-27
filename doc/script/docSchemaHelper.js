const importSchemaMD = require('./importSchemaMDConverter');
const graphQLSchemaMD = require('./graphQLSchemaMDConverter');
const graphQLSchema = require('../../src/graphql/graphqlSchema');
const dotSchema = require('./dotschema');
const fs = require('fs');

fs.writeFileSync('./doc/generated/assetModel.dot', dotSchema.dotSchema.toString());
fs.writeFileSync('./doc/generated/importSchema.md', importSchemaMD.importMD);
fs.writeFileSync('./doc/generated/graphQLSchema.md', graphQLSchemaMD.graphQLMD);
fs.writeFileSync('./doc/generated/graphQLSchema.sdl', graphQLSchema.graphQLSchema.toString());
