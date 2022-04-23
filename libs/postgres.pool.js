const { Pool } = require('pg');

const { config } = require('../config/config');

const options = {}

if(config.isProduction) {
  URI = config.dbUrl;
  options.connectionString = config.dbUrl;
  options.ssl = { rejectUnauthorized: false };
}else{
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  const URI = `${config.dbDialect}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbDatabase}`;
  options.connectionString = URI;
}

const pool = new Pool(options);

module.exports = pool;
