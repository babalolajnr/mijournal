const express = require("express")
const app = express()
const port = 3000
const UserRouter = require('./routes/UserRoute')
const mongoose = require('mongoose');

const moongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

//mongoose connection
mongoose.connect('mongodb://localhost:27017/mijournal', moongooseOptions)
    .then(() => {
        console.log('Database connection established')
    }).catch((err) => {
        console.log('Error connecting to the database')
    })

app.listen(port, () => {
    console.log(`Listening on ${port} ...`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', UserRouter)
