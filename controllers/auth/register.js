const User = require('../../db/models/User')
const Joi = require('joi')
const bcrypt = require('bcrypt')

const register = async (req, res) => {

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
        res.status(222).send(error)
    } else {

        // hash password
        const hashedPassword = await bcrypt.genSalt().then((hash) => {
            return bcrypt.hash(value.password, hash)
        })

        value.password = hashedPassword

        const data = new User({ ...value })

        await data.save().then(() => {
            res.status(201).json({ message: 'User Created!' })
        }).catch((err) => {
            res.status(400).json({ message: err })
        })

    }
}

module.exports = register