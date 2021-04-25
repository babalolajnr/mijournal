
const expect = require('chai').expect
const request = require('supertest')

const app = require('../../app')
const db = require('../../db/db')

const moongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

describe('POST /users', () => {
    before(async () => {
        await db.connect()
    })

    after(async () => {
        await db.close()
    })

    it('OK, a new user can be registered', done => {

        const data = {
            firstName: "abdulqudduus",
            lastName: "babalola",
            email: "newssr@gmail.com",
            phone: "0901645465",
            password: "12345678",
            passwordConfirmation: "12345678"
        }

        request(app).post('/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect(201, done)



    }).timeout(6000)

})