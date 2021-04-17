const express = require("express")
const router = express.Router()
const JournalController = require('../controllers/Journal')

router.post('/store', JournalController.storeJournal)

module.exports = router