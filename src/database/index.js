const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const connection = new Sequelize(dbConfig);



const clientes = connection.import('../models/clientes.js');
connection.authenticate()
  .then(() => {
    console.log('Connected to DB');
  });

module.exports = connection;