const { Pool } = require('pg');

const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `${config.dbDialect}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbDatabase}`;

const pool = new Pool({ connectionString: URI });

module.exports = pool;
