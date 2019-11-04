
const express = require('express');

const clientes = require('./controllers/clientesController');
const vendas = require('./controllers/vendasController');


const routes = express.Router();

routes.post('/vendas', vendas.store);
routes.get('/vendas', vendas.index);

routes.post('/clientes', clientes.store);
routes.get('/clientes', clientes.index);


module.exports = routes;