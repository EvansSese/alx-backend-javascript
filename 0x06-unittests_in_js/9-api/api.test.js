const request = require('request');
const assert = require('assert');
const server = require('./api');

describe('API Test', function () {
    after(function () {
        server.close();
    });

    describe('GET /', function () {
        it('responds with status code 200', function (done) {
            request.get('http://localhost:7865', function (error, response) {
                assert.equal(response.statusCode, 200);
                done();
            });
        });

        it('responds with correct result', function (done) {
            request.get('http://localhost:7865', function (error, response, body) {
                assert.equal(body, 'Welcome to the payment system');
                done();
            });
        });
    });

    describe('GET /cart/:id', function () {
        it('responds with status code 200 when :id is a number', function (done) {
            request.get('http://localhost:7865/cart/12', function (error, response) {
                assert.equal(response.statusCode, 200);
                done();
            });
        });

        it('responds with status code 404 when :id is NOT a number', function (done) {
            request.get('http://localhost:7865/cart/hello', function (error, response) {
                assert.equal(response.statusCode, 404);
                done();
            });
        });
    });
});
