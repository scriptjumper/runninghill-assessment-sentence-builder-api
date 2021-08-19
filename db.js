const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  database: 'postgres',
  host: 'localhost',
  port: 5433
})

module.exports = pool
