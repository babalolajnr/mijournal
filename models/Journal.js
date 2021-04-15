const mongoose = require('mongoose')
const User = require('./User')
const { Schema } = mongoose

const journalSchema = new Schema ({
    entry: {
        required: true,
        type: String
    },
    date: Date,
    favourite: Boolean,
    user: User
})

module.exports = journalSchema