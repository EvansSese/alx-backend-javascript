const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber function', function () {
    describe('SUM', function () {
        it('should return 4 when adding 1 and 3', function () {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });

        it('should return 5 when adding 1 and 3.7', function () {
            expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
        });
    });

    describe('SUBTRACT', function () {
        it('should return -2 when subtracting 3 from 1', function () {
            expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
        });

        it('should return -3 when subtracting 3.7 from 1', function () {
            expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
        });
    });

    describe('DIVIDE', function () {
        it('should return 0.5 when dividing 1 by 2', function () {
            expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
        });

        it('should return 1 when dividing 3 by 3', function () {
            expect(calculateNumber('DIVIDE', 3, 3)).to.equal(1);
        });

        it('should return "Error" when dividing 1 by 0', function () {
            expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
        });
    });

    describe('Invalid type', function () {
        it('should throw an error for an invalid type', function () {
            expect(() => calculateNumber('INVALID', 1, 2)).to.throw(Error);
        });
    });
});
