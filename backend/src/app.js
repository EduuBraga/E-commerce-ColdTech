const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes/productsRoutes.js');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/', routes);
app.use('/', (req, res) => {
  res.send('Bem-vindo API ColdTech, experimente usar a rota "/allProducts"');
});

module.exports = app;