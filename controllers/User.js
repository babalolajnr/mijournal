const User = require('../models/User')

const UserController = {
    createUser: function (req, res) {

        User.create({ ...req.body }).then(() => {
            res.send('User created')
        }).catch((err) => {
            res.send(err)
        })
    }
}

module.exports = UserController