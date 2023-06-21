const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();
let sequelize;

sequelize = new Sequelize(

  // Environment variables defined in Azure App portal
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
      ssl: process.env.AZURE_MYSQL_SSL
    }
  }
);

module.exports = sequelize;