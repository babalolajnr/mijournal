const express = require("express")
const router = express.Router()
const UserController = require('../controllers/User')

router.post('/store', UserController.storeUser)

module.exports = router