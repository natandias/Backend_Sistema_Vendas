
const express = require('express');

const clientes = require('./controllers/clientesController');


const routes = express.Router();

routes.post('/clientes', clientes.store);


module.exports = routes;