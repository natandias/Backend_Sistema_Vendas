

/*const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
*/
const sequelize = require('../database/index');
const clientes = sequelize.import('../models/clientes');

module.exports = {
  async store(req, res) {
    const { nome, email } = req.body;

    try {
    const cliente = await clientes.create({ nome, email });
    return res.json(cliente);
    }
    catch {
       console.log('falhou');
       return(res.json('falhou'));
    }
  }
}