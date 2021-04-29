process.env.NODE_ENV = "test"

const expect = require('chai').expect
const request = require('supertest')

const app = require('../../app')
const db = require('../../db/db')

describe('POST /users', () => {
    beforeEach(() => {
        db.connect()
        db.refreshDatabase()
    })

    afterEach(() => {
        db.refreshDatabase()
    })

    after(() => db.close())

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