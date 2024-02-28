const request = require('supertest');
const assert = require('assert');
const server = require('./api');

describe('API Test', function () {
    after(function () {
        server.close();
    });

    describe('GET /', function () {
        it('responds with status code 200', function (done) {
            request(server)
                .get('/')
                .expect(200, done);
        });

        it('responds with correct result', function (done) {
            request(server)
                .get('/')
                .expect('Welcome to the payment system', done);
        });
    });
});
