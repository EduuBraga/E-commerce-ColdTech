const routes = require('express').Router();
const { 
  getAllNotebooks, 
  getAllMonitors, 
  getAllComputers, 
  getAllAccessories,
  getAllProducts
} = require('../controllers/productsControler.js');

routes.get('/notebooks', getAllNotebooks);
routes.get('/monitors', getAllMonitors);
routes.get('/computers', getAllComputers);
routes.get('/accessories', getAllAccessories);
routes.get('/allProducts', getAllProducts);

module.exports = routes;