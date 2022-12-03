const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
require('dotenv-safe').config()

app.use(express.json())
app.use(helmet())
app.use(cors())

const { APP_PORT } = require('./config/environment')
const routes = require('./routes')
require('./config/database')

app.use('/api/v1/users', routes)

app.listen(APP_PORT, () => {
  console.info(`APP RUNNING ON ${APP_PORT}`)
})
