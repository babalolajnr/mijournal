if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}
const express = require("express")
const mongoose = require('mongoose')
const port = 3000
const app = express()
const helmet = require('helmet') // Helmet helps to secure Express apps by setting various HTTP headers.
const passport = require('passport')
const initializePassport = require('./config/passport')
const User = require("./models/User")
const flash = require('express-flash')
const session = require('express-session')
const JournalRouter = require('./routes/JournalRoute')
const UserRouter = require('./routes/UserRoute')

initializePassport(passport)

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
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.post('/login', passport.authenticate('local', {
    failureFlash: true,
    failWithError: true,
    failureMessage: true,
    successFlash: 'Welcome',
    successMessage: 'Welcome',
    successRedirect: '/'
}))
app.get('/', (req, res) => {
    res.send('Hello')
})
app.use('/user', UserRouter)
app.use('/journal', JournalRouter)
