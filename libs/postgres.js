const { Client } = require('pg');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'yeisson',
    password: 'a123456',
    database: 'dbusers',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;


