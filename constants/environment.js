const dotenv = require('dotenv')

// When working locally, add {path: __dirname: }
dotenv.config({ path: __dirname + '/../.env' })

const { DB_PORT, DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env

module.exports = {
  DB_PORT,
  DB_HOST,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD
}
