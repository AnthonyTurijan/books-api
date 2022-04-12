//require mongoose
require('dotenv').config()
const mongoose = require('mongoose')

//connecting mongoose
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Book = require('./book_model')