const mongoose = require('mongoose')
const { DATABASE_URL } = require('./environment')

const connectDB = () => {
  const dbOptions = {
    autoIndex: true,
  }
  mongoose.connect(DATABASE_URL, dbOptions, (err) => {
    if(err) throw err

    console.info("DATABASE CONNECTED")
  })

  mongoose.connection.on('disconnected', () => {
    connectDB()
  })
}

connectDB()
