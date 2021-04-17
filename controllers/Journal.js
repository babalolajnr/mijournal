const Joi = require('joi')
const User = require('../models/User')


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
                res.send('Journal Added')
            }).catch((err) => {
                res.send(err)
            })
        }
    }
}

module.exports = journalController