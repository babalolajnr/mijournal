const express = require("express")
const router = express.Router()
const UserController = require('../controllers/User')
const User = require('../models/User')

router.get('/', function (req, res) {
    res.send('SignUp page')
})

router.post('/addUser', UserController.createUser)

module.exports = router