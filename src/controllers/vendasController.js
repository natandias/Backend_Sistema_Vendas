const sequelize = require('../database/index');
const vendas = sequelize.import('../models/vendas');

module.exports = {
  async store(req, res) {
    const { valor, id_cliente=1 } = req.body;

    try {
    const venda = await vendas.create({ valor, id_cliente }, {
      fields: ['valor', 'id_cliente']
    });
    return res.json(venda);
    }
    catch {
      return(res.json('falhou'));
    }

  },
  async index(req, res) {
    try {
      const venda = await vendas.findAll({});
      let retorno = res.json;
      return res.json(venda);
    }
    catch {
        return(res.json('Não foi possível listar vendas'));
     }

  }
}
