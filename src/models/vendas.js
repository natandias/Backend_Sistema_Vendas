/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendas', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clientes',
        key: 'id'
      }
    },
    data_venda: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: 'date_trunc(second'
    }
  }, {
    timestamps: false,
    tableName: 'vendas'
  });
};
