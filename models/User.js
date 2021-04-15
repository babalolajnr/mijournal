const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        unique: true,
        type: String
    },
    phone: {
        unique: true,
        type: Number,
        required: false
    },
    password: String
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User