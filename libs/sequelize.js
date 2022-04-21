const { Sequelize } = require('sequelize');

const { config } = require('../config/config');

const setupModels = require('../db.models/index');

const options = {
  dialect: 'postgres',
  logging: config.isProduction ? false : true,
}

if (config.isProduction) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
