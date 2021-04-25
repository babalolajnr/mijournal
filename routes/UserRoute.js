const express = require("express")
const router = express.Router()
const UserController = require('../controllers/User')

router.get('/hi', (req, res) => {
    console.log(req.user)
})

module.exports = router