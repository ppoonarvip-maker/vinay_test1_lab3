// calculator.test.js
// Comprehensive unit tests for calculator functions
// Uses Jest

const { add, subtract, multiply, divide } = require('../calculator');

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
});
