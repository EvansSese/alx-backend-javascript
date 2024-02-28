const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function', function () {
  describe('SUM', function () {
    it('should return 4 when adding 1 and 3', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when adding 1 and 3.7', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -2 when subtracting 3 from 1', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should return -3 when subtracting 3.7 from 1', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.5 when dividing 1 by 2', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
    });

    it('should return 1 when dividing 3 by 3', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 3), 1);
    });

    it('should return "Error" when dividing 1 by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for an invalid type', function () {
      assert.throws(() => calculateNumber('INVALID', 1, 2), Error);
    });
  });
});
