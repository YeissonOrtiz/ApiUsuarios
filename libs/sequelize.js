const { Sequelize } = require('sequelize');

const { config } = require('../config/config');

const setupModels = require('../db.models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `${config.dbDialect}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbDatabase}`;

const sequelize = new Sequelize(URI, { dialect: 'postgres', logging: console.log });

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
