const express = require("express")
const router = express.Router()
const JournalController = require('../controllers/Journal')

router.post('/store', JournalController.storeJournal)
router.get('/entries', JournalController.getAllJournals)

module.exports = router