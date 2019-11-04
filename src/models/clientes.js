/* jshint indent: 2 */


module.exports = function (sequelize, DataTypes) {
  return sequelize.define('clientes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    data_cadastro: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: 'date_trunc(second',
    }
  }, {
    timestamps: false,
    tableName: 'clientes'
  });
};
