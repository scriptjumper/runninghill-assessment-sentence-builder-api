const Pool = require('pg').Pool
const env = require('../constants/environment')

const pool = new Pool({
  user: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  port: env.DB_PORT || 5432
})

module.exports = pool
