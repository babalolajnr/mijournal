const Joi = require('joi')
const User = require('../db/models/User')


const journalController = {
    storeJournal: async (req, res) => {
        const schema = Joi.object({
            entry: Joi.string().required()
        })

        const { error, value } = schema.validate({ ...req.body })

        if (error) {
            res.send(error)
        } else {
            const user = await User.findOne({ email: 'tryagainagainagain@gmail.com' })

            const journals = user.journals
            journals.push({ ...value })

            user.save().then(() => {
                res.status(201).send('Journal Added')
            }).catch((err) => {
                res.send(err)
            })
        }
    },
    getAllJournals: async (req, res) => {
        let user = req.user.id
        user = await User.findById(user)

        const journals = await user.journals

        res.send(journals)

    }
}

module.exports = journalController