const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" and console.log should be called once for totalAmount=100 and totalShipping=20', function () {
    sendPaymentRequestToApi(100, 20);
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
  });

  it('should log "The total is: 20" and console.log should be called once for totalAmount=10 and totalShipping=10', function () {
    sendPaymentRequestToApi(10, 10);
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
  });
});
