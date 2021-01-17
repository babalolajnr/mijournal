const mongoose = require('mongoose')
const { Schema } = mongoose

const journalSchema = new Schema ({
    entry: {
        required: true,
        type: String
    },
    date: Date,
    favourite: Boolean,
})

module.exports = journalSchema