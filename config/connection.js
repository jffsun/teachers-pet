const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

let sequelize;

if (process.env.WEBSITE_SITE_NAME) {
  // Running in Azure environment
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        ssl: {
          ca: process.env.DB_SSL_CA || '',
        },
      },
    }
  );
} else {
  // Running locally
  sequelize = new Sequelize(
    process.env.DB_NAME_LOCAL,
    process.env.DB_USER_LOCAL,
    process.env.DB_PASSWORD_LOCAL,
    {
      host: process.env.DB_HOST_LOCAL,
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;