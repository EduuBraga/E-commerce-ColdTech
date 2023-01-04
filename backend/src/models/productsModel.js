const { Schema, model } = require('mongoose');

const productsSchema = new Schema({
  title: { type: String, required: true },
  value: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: Object, required: true },
  img_url: { type: String, required: true }
});

const notebooksModel = model('notebooks', productsSchema);
const accessoriesModel = model('accessories', productsSchema);
const computersModel = model('computers', productsSchema);
const monitorsModel = model('monitors', productsSchema);

module.exports = {
  notebooksModel,
  accessoriesModel,
  computersModel,
  monitorsModel
};