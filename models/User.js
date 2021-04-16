const mongoose = require('mongoose')
const { Schema } = mongoose
const uniqueValidator = require('mongoose-unique-validator')

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

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User