const request = require('supertest');
const db = require('../database/dbConfig');
const Users = require('./auth-model');
const server = require('../api/server');

describe('auth router', function() {
    
    describe('POST /api/auth/register', function() {
        
        it('should save a new user to the db', async function() {
            const response = await request(server)
            .post('/api/auth/register')
            .send({
                username: 'neeltest11',
                password: 'test1'
            })

            .expect(201)
        })
    })

    describe('POST /api/auth/login', function () {
        
        it('should login user', async function() {
            const login = await request(server)
            .post('/api/auth/login')
            .send({
                username: 'neeltest11',
                password: 'test1'
            })
            .expect(200)
        })
    })

    describe('POST /api/auth/login', function () {
        
        it('should login user', async function() {
            const login = await request(server)
            .post('/api/auth/login')
            .send({
                username: 'neeltest11',
                password: 'wrong'
            })
            .expect(401)
        })
    })
})

