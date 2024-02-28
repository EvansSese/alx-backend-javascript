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

    describe('GET /available_payments', function () {
        it('responds with status code 200 and correct structure', function (done) {
            request.get('http://localhost:7865/available_payments', function (error, response, body) {
                const expected = {
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                };
                assert.equal(response.statusCode, 200);
                assert.deepEqual(JSON.parse(body), expected);
                done();
            });
        });
    });

    describe('POST /login', function () {
        it('responds with status code 200 and correct message', function (done) {
            const username = 'Betty';
            const postData = { userName: username };
            request.post({
                url: 'http://localhost:7865/login',
                body: JSON.stringify(postData),
                headers: { 'Content-Type': 'application/json' }
            }, function (error, response, body) {
                assert.equal(response.statusCode, 200);
                assert.equal(body, `Welcome ${username}`);
                done();
            });
        });
    });
});
