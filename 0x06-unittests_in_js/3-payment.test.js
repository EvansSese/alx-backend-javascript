const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments and log the sum', function () {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));

    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});
