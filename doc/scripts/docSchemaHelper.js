const docSchema = require ('./docSchema');
const swaggerHelper = require ('./swagger');
const fs = require ('fs');

const genSchema = async () => {
  await docSchema.docSchema.loadCoreSchema();
  fs.writeFileSync (
    './doc/generated/assetModel.dot',
    docSchema.docSchema.toString()
  );
  swaggerHelper;
}

genSchema().then(() => {
  console.log('Done');
});
