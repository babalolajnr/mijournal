const User = require('../models/User')
const Joi = require('joi')
const bcrypt = require('bcrypt')

const UserController = {
    register: async (req, res) => {

        // Joi validation schema
        const schema = Joi.object({
            firstName: Joi.string().max(20).required(),
            lastName: Joi.string().max(20).required(),
            email: Joi.string().email().required(),
            phone: Joi.string().max(15),
            password: Joi.string().required(),
            passwordConfirmation: Joi.ref('password')
        })

        const { error, value } = schema.validate({ ...req.body })

        if (error) {
            res.send(error)
            res.status(222)
        } else {

            // hash password
            const hashedPassword = await bcrypt.genSalt().then((hash) => {
                return bcrypt.hash(value.password, hash)
            })

            value.password = hashedPassword

            const data = new User({ ...value })

            data.save().then(() => {
                res.send('User created')
                res.status(201)
            }).catch((err) => {
                res.send(err)
                res.status(500)
            })

        }
    }
}

module.exports = UserController