/**
 * Contains database connection
 */
const mongoose = require('mongoose')

const moongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

let DB_URI;

if (process.env.NODE_ENV == 'test') {
    DB_URI = process.env.TEST_DATABASE_URL
} else {
    DB_URI = process.env.DATABASE_URL
}

/**
 * Connect to database
 * @returns Promise
 */
const connect = () => {

    return new Promise((resolve, reject) => {

        //mongoose connection
        mongoose.connect(DB_URI, moongooseOptions)
            .then(() => resolve())
            .catch((err) => reject(err))
    })
}

/**
 * Disconnect database connection
 * @returns Promise
 */
const close = () => {
    return new Promise((resolve, reject) => {
        mongoose.disconnect()
            .then(() => resolve())
            .catch((err) => reject(err))
    })
}

/**
 * Drop database 
 * @param {*} done 
 * @returns Promise
 */
const refreshDatabase = () => {
    return new Promise((resolve, reject) => {
        mongoose.connection.db.dropDatabase()
            .then(() => resolve())
            .catch((err) => reject(err))
    })
}

module.exports = { connect, close, refreshDatabase }