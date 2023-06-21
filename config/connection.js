const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();
let sequelize;

if (process.env.JAWSDB_URL) {
  // Azure provides its own database service, so you don't need to configure JawsDB for deployment
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST, // Update this with the Azure database host
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;