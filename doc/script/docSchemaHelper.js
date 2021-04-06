const dotSchema = require ('./dotschema');
const fs = require ('fs');

fs.writeFileSync (
  './doc/generated/assetModel.dot',
  dotSchema.dotSchema.toString ()
);
