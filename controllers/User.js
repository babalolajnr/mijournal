const User = require('../models/User')

const UserController = {
    createUser: function (req, res) {
        // User.create(req)
        console.log(req.data)
        res.send('User created')
    }
}

module.exports = UserController