const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    phoneNumber : Number,
    email : String,
})

const contactModel = mongoose.model('Contact', contactSchema)

module.exports = contactModel