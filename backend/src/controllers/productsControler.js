const {
  notebooksModel,
  accessoriesModel,
  computersModel,
  monitorsModel
} = require('../models/productsModel.js');

const getAllNotebooks = async (req, res) => {
  try {
    const docsNotebooks = await notebooksModel.find({});
    res.status(200).json(docsNotebooks);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getAllMonitors = async (req, res) => {
  try {
    const docsMonitors = await monitorsModel.find({});
    res.status(200).json(docsMonitors);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getAllAccessories = async (req, res) => {
  try {
    const docsAccessories = await accessoriesModel.find({});
    res.status(200).json(docsAccessories);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getAllComputers = async (req, res) => {
  try {
    const docsComputers = await computersModel.find({});
    res.status(200).json(docsComputers);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const docsComputers = await computersModel.find({})
    const docsAccessories = await accessoriesModel.find({});
    const docsMonitors = await monitorsModel.find({});
    const docsNotebooks = await notebooksModel.find({});

    const allDocs = [...docsAccessories, ...docsComputers, ...docsMonitors, ...docsNotebooks];
    res.status(200).json(allDocs);
  } catch (error) {
    res.status(404).json(error.message)
  }
};

module.exports = {
  getAllNotebooks,
  getAllMonitors,
  getAllComputers,
  getAllAccessories,
  getAllProducts
};