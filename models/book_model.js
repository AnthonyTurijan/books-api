//requiring mongoose
const mongoose = require('mongoose')

//creating new Schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: {type: String, required: true},
    year: { type: Number, required: true},
    quantity: { type: Number, required: true},
    imageURL: { type: String, required: true}
})

//exporting
module.exports = mongoose.model('Book', bookSchema)