const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // unsure if this is correct
  is_admin: {
    type: Number,
    default: 0,
  },
})

const User = mongoose.model('User', UserSchema)

module.exports = User
