const express = require("express")
const app = express()
const port = 3000
const UserRouter = require('./routes/UserRoute')

app.use('/', UserRouter)
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
