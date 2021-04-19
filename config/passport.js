const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/User')

const initialize = passport => {

    const authenticateUser = async (email, password, done) => {

        const user = await User.findOne({ email })

        if (user == null) {
            return done(null, false, { message: 'Record not found' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Record not found' })
            }
        } catch (error) {
            return done(error)
        }
    }

    const getUserById = id => {
        return User.findById(id)
    }

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
    passport.serializeUser((user, done) => { done(null, user.id) })
    passport.deserializeUser((user, done) => {
        return done(null, getUserById(user.id))
    })
}

module.exports = initialize

