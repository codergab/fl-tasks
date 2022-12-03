require('dotenv-safe').config()

const APP_PORT = process.env.PORT || 3200
const DATABASE_URL = process.env.DATABASE_URL

module.exports = {
  APP_PORT,
  DATABASE_URL
}