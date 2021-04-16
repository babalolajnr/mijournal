const User = require('../models/User')
const Joi = require('joi')

const UserController = {
    createUser: function (req, res) {

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
        } else {
            
            const data = new User({ ...value })

            data.save().then(() => {
                res.send('User created')
            }).catch((err) => {
                res.send(err)
            })
           
        }
    }
}

module.exports = UserController