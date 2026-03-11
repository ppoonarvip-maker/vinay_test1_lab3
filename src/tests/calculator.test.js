// calculator.test.js
// Comprehensive unit tests for calculator functions
// Uses Jest

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('adds 5 + 3 to equal 8', () => {
      expect(add(5, 3)).toBe(8);
    });
    test('adds -2 + 2 to equal 0', () => {
      expect(add(-2, 2)).toBe(0);
    });
  });

  describe('Subtraction', () => {
    test('subtracts 10 - 4 to equal 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });
    test('subtracts 0 - 5 to equal -5', () => {
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('Multiplication', () => {
    test('multiplies 7 * 6 to equal 42', () => {
      expect(multiply(7, 6)).toBe(42);
    });
    test('multiplies 0 * 10 to equal 0', () => {
      // calculator.test.js
      // Comprehensive unit tests for calculator functions
      // Uses Jest

      const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

      describe('Calculator Functions', () => {
        describe('Addition', () => {
          test('adds 5 + 3 to equal 8', () => {
            expect(add(5, 3)).toBe(8);
          });
          test('adds -2 + 2 to equal 0', () => {
            expect(add(-2, 2)).toBe(0);
          });
        });

        describe('Subtraction', () => {
          test('subtracts 10 - 4 to equal 6', () => {
            expect(subtract(10, 4)).toBe(6);
          });
          test('subtracts 0 - 5 to equal -5', () => {
            expect(subtract(0, 5)).toBe(-5);
          });
        });

        describe('Multiplication', () => {
          test('multiplies 7 * 6 to equal 42', () => {
            expect(multiply(7, 6)).toBe(42);
          });
          test('multiplies 0 * 10 to equal 0', () => {
            expect(multiply(0, 10)).toBe(0);
          });
        });

        describe('Division', () => {
          test('divides 20 / 5 to equal 4', () => {
            expect(divide(20, 5)).toBe(4);
          });
          test('divides 10 / 2 to equal 5', () => {
            expect(divide(10, 2)).toBe(5);
          });
          test('division by zero returns error', () => {
            expect(divide(10, 0)).toBe('Error: Division by zero');
          });
        });

        describe('Modulo', () => {
          test('modulo 10 % 3 to equal 1', () => {
            expect(modulo(10, 3)).toBe(1);
          });
          test('modulo 7 % 7 to equal 0', () => {
            expect(modulo(7, 7)).toBe(0);
          });
          test('modulo by zero returns error', () => {
            expect(modulo(5, 0)).toBe('Error: Division by zero');
          });
        });

        describe('Power', () => {
          test('power 2^3 to equal 8', () => {
            expect(power(2, 3)).toBe(8);
          });
          test('power 5^0 to equal 1', () => {
            expect(power(5, 0)).toBe(1);
          });
          test('power 4^-1 to equal 0.25', () => {
            expect(power(4, -1)).toBeCloseTo(0.25);
          });
        });

describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('adds 5 + 3 to equal 8', () => {
      expect(add(5, 3)).toBe(8);
    });
    test('adds -2 + 2 to equal 0', () => {
      expect(add(-2, 2)).toBe(0);
    });
  });

  describe('Subtraction', () => {
    test('subtracts 10 - 4 to equal 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });
    test('subtracts 0 - 5 to equal -5', () => {
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('Multiplication', () => {
    test('multiplies 7 * 6 to equal 42', () => {
      expect(multiply(7, 6)).toBe(42);
    });
    test('multiplies 0 * 10 to equal 0', () => {
      expect(multiply(0, 10)).toBe(0);
    });
  });

  describe('Division', () => {
    test('divides 20 / 5 to equal 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
    test('divides 10 / 2 to equal 5', () => {
      expect(divide(10, 2)).toBe(5);
    });
    test('division by zero returns error', () => {
      expect(divide(10, 0)).toBe('Error: Division by zero');
    });
  });

  describe('Modulo', () => {
    test('modulo 10 % 3 to equal 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });
    test('modulo 7 % 7 to equal 0', () => {
      expect(modulo(7, 7)).toBe(0);
    });
    test('modulo by zero returns error', () => {
      expect(modulo(5, 0)).toBe('Error: Division by zero');
    });
  });

  describe('Power', () => {
    test('power 2^3 to equal 8', () => {
      expect(power(2, 3)).toBe(8);
    });
    test('power 5^0 to equal 1', () => {
      expect(power(5, 0)).toBe(1);
    });
    test('power 4^-1 to equal 0.25', () => {
      expect(power(4, -1)).toBeCloseTo(0.25);
    });
  });

  describe('Square Root', () => {
    test('square root of 9 to equal 3', () => {
      expect(squareRoot(9)).toBe(3);
    });
    test('square root of 0 to equal 0', () => {
      expect(squareRoot(0)).toBe(0);
    });
    test('square root of negative returns error', () => {
      expect(squareRoot(-4)).toBe('Error: Negative input');
    });
