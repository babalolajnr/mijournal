const express = require("express")
const app = express()
const port = 3000
const UserRouter = require('./routes/UserRoute')
const mongoose = require('mongoose');

//mongoose connection
mongoose.connect('mongodb://localhost:27017/mijournal', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', UserRouter)
