// calculator.js
// Node.js CLI Calculator
// Supports: Addition, Subtraction, Multiplication, Division

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    return 'Error: Negative input';
  }
  return Math.sqrt(n);
}

function askOperation() {
  rl.question('Choose operation (add, subtract, multiply, divide): ', (op) => {
    rl.question('Enter first number: ', (num1) => {
      rl.question('Enter second number: ', (num2) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let result;
        switch (op) {
          case 'add':
            result = add(a, b);
            break;
          case 'subtract':
            result = subtract(a, b);
            break;
          case 'multiply':
            result = multiply(a, b);
            break;
          case 'divide':
            result = divide(a, b);
            break;
          default:
            result = 'Invalid operation';
        }
        console.log(`Result: ${result}`);
        rl.close();
      });
    });
  });
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
