if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}
const express = require("express")
const app = express()
const helmet = require('helmet') // Helmet helps to secure Express apps by setting various HTTP headers.
const passport = require('passport')
const initializePassport = require('./config/passport')
const flash = require('express-flash')
const session = require('express-session')
const JournalRouter = require('./routes/JournalRoute')
const UserRouter = require('./routes/UserRoute')
const checkIsAuthenticated = require('./middlewares/checkIsAuthenticated')
const register = require('./controllers/auth/register')

initializePassport(passport)

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

app.get('/', checkIsAuthenticated, (req, res) => {
    // res.send(`Hello ${req.user.firstName} ${req.user.lastName}`)
    res.status(500).json({ message: 'oh no' })
})
app.post('/register', register)
app.use('/user', checkIsAuthenticated, UserRouter)
app.use('/journal', checkIsAuthenticated, JournalRouter)

module.exports = app