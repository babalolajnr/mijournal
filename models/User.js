const mongoose = require('mongoose')
const { Schema } = mongoose
const uniqueValidator = require('mongoose-unique-validator')
const journalSchema = require('./Journal')

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        index: true,
        unique: true,
        type: String
    },
    phone: {
        unique: true,
        type: String,
        required: false,
        index: { unique: true, sparse: true },
    },
    password: String,
    journals: [journalSchema]
}, {
    timestamps: true,
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User