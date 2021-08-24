require('dotenv').config()
const mongoose = require('mongoose')

const connect = () => {mongoose.connect(
  process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) 
  .then(console.log(`Database to-do list conectada com sucesso. ${process.env.DATABASE_URL}`))
  .catch(err => console.err)
}

module.exports = { connect }