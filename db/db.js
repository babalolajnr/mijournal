/**
 * Contains database connection
 */
const mongoose = require('mongoose')

const moongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

const DB_URI = 'mongodb://localhost:27017/mijournal'

const connect = () => {

    return new Promise((resolve, reject) => {

        //mongoose connection
        mongoose.connect(DB_URI, moongooseOptions)
            .then(() => {
                return resolve()
            }).catch((err) => {
                return reject(err)
            })

    })
}
const close = () => {
    return mongoose.disconnect()
}

module.exports = { connect, close }