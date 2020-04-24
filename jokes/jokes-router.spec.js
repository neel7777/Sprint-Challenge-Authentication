const request = require('supertest');

const server = require('../api/server');

describe('jokes router', function () {
    describe('GET /api/jokes', function () {
        it('should return json', function () {
            return request(server)
            .get('/api/jokes')
            .then(res=>{
                expect(res.type).toMatch(/json/i)
            })
        })
        it('should return 400 for no authentication', function () {
            return request(server)
            .get('/api/jokes')
            .then(res=>{
                expect(res.status).toBe(400)
            })
        })
    })

})