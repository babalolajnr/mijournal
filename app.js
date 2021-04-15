const express = require("express")
const app = express()
const port = 3000
const UserRouter = require('./routes/UserRoute')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mijournal', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', UserRouter)
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
