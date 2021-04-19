const express = require("express")
const router = express.Router()
const UserController = require('../controllers/User')

router.post('/register', UserController.register)
router.get('/hi', (req, res) => {
    console.log(req.user)
})

module.exports = router