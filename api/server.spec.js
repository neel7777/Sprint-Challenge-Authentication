const request = require("supertest");

const server = require("./server.js");

const db = require("../database/dbConfig.js");

it("is running on the db", () => {
    expect(process.env.DB_ENV).toBe('testing');
})

describe("server", function () {
    describe("GET /", function () {
      it("should return 200 OK", function () {
        // make a GET request to / endpoint on the server
        return request(server) // return the async call to let jest know it should wait
          .get("/")
          .then(res => {
            // assert that the HTTP status code is 200
            expect(res.status).toBe(200);
          });
      });
    });

    it('should respond with { api: "up" }', function() {
        return request(server)
        .get('/')
        .then(res => {
            expect(res.body.api).toBe('up');
        })
    })

});
    