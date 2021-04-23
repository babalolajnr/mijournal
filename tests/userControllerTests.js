// const expect = require('chai').expect
const request = require('supertest')
const express = require('express')

const app = require('../app')

describe('User', function () {

    it('can register', function (done) {
        request(app)
            .post('/user/register')
            .send('firstName=abdulqudduus,lastName=babalola,email=babalolajnr@gmail.com,phone=09012345678,password=12345678,passwordConfirmation=12345678') // x-www-form-urlencoded upload
            .set('Accept', 'application/json')
            // .expect('Content-Type', /json/)
            .expect(200, done)
            .expect((res) => {
                res.body = 'User '
            })
        // request(app)
        //     .get('/')
        //     .expect(200, done)
    })
})