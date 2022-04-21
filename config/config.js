require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbDatabase: process.env.DB_DATABASE,
  dbDialect: process.env.DB_DIALECT,
  dbUrl: process.env.DATABASE_URL,
};

module.exports = { config };
