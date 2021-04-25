const mongoose = require('mongoose')
const { Schema } = mongoose

const journalSchema = new Schema({
    entry: {
        required: true,
        type: String
    },
    favourite: Boolean,
}, {
    timestamps: true
})

module.exports = journalSchema