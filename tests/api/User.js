process.env.NODE_ENV = "test"

const expect = require('chai').expect
const request = require('supertest')
const Faker = require('faker')

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

        const password = Faker.internet.password(10, true)

        const data = {
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            email: Faker.internet.email(),
            phone: Faker.phone.phoneNumber(),
            password: password,
            passwordConfirmation: password
        }

        request(app).post('/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect(201, done)

    }).timeout(6000)

})