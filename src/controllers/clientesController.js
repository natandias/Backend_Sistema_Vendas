const sequelize = require('../database/index');
const clientes = sequelize.import('../models/clientes');

module.exports = {
  async store(req, res) {
    const { nome, telefone=null, email=null,  } = req.body;
    try {
      const cliente = await clientes.create({ nome, telefone, email }, {
      fields: ['nome', 'telefone', 'email']
    });
      return res.json(cliente);
    }
    catch {
      return(res.json('Não foi possível cadastrar cliente'));
    }
  },

  async index(req, res) {
    try {
      const cliente = await clientes.findAll({});
      return res.json(cliente);
    }
    catch {
       return(res.json('Não foi possível listar clientes'));
     }
    }
}
