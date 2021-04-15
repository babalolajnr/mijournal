const User = require('../models/User')

const UserController = {
    createUser: function (req, res) {
        User.create({ ...req.body })
        res.send('User created')
    }
}

module.exports = UserController