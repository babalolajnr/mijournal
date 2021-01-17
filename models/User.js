const mongoose = require('mongoose')
const { Schema } = mongoose
const journalSchema = require('Journal')

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: {
        type: Number,
        required: false
    },
    password: String,
    journal: journalSchema
})

const User = mongoose.model('User', userSchema)

module.exports = User