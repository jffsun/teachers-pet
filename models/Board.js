const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Board extends Model {}

Board.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    where: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    when: {
      // DATETIME - format: YYYY-MM-DD HH:MI:SS
      type: DataTypes.DATE, 
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'board',
  }
);

module.exports = Board;

