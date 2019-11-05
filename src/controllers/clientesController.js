const sequelize = require('../database/index');
const clientes = sequelize.import('../models/clientes');

module.exports = {
  async store(req, res) {
    const { nome, telefone=null, email=null, endereco=null  } = req.body;
    try {
      const cliente = await clientes.create({ nome, telefone, email, endereco }, {
      fields: ['nome', 'telefone', 'email', 'endereco']
    });
      return res.json(cliente);
    }
    catch {
      return(res.json('Não foi possível cadastrar cliente'));
    }
  },

  async index(req, res) {
    try {
      const cliente = await clientes.findAll({order: ['id']});
      return res.json(cliente);
    }
    catch {
       return(res.json('Não foi possível listar clientes'));
     }
    },

    async delete(req, res) {
     try {
            const { nome } = req.params;
            const retornoQuery = await clientes.findOne({
              attributes: ['id'],
              where: {
                nome
              }
            });

          const id = retornoQuery.dataValues.id;
          console.log(retornoQuery.dataValues.id);

          if (!id) {
            return res.status(400).json({ error: 'Cliente não existe' });
          }

          await clientes.destroy({
            where: { id }
          });

          return res.json(id);
        }
     catch {
          return res.json('Não foi possível excluir');
     }
  }
}
