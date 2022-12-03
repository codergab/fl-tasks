const {Schema, model} = require('mongoose')

const userSchema = new Schema({
  Id: {
    index: true,
    unique: true,
    type: String,
  },
  Name: {
    type: String,
    trim: true,
  },
  Email: {
    type: String,
    unique: true,
    trim: true
  }
})

const Users = model('User', userSchema)

module.exports = Users