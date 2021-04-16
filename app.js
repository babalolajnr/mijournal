const express = require("express")
const mongoose = require('mongoose')
const port = 3000
const app = express()
const helmet = require('helmet') // Helmet helps to secure Express apps by setting various HTTP headers.
const UserRouter = require('./routes/UserRoute')

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
        console.log(err)
    })

app.listen(port, () => {
    console.log(`Listening on ${port} ...`)
})

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', UserRouter)
