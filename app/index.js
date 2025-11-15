// Basic Node.js module for SonarQube testing

/**
 * Calculates the sum of two numbers.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Calculates the difference of two numbers.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Calculates the product of two numbers.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Calculates the division of two numbers.
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} The quotient of a and b
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * A simple function that demonstrates code duplication for SonarQube.
 * This is intentionally duplicated to trigger code smell detection.
 */
function duplicateFunction1() {
  console.log('This is a duplicate function');
  console.log('Line 2');
  console.log('Line 3');
}

/**
 * Another duplicate function to test SonarQube's duplication detection.
 */
function duplicateFunction2() {
  console.log('This is a duplicate function');
  console.log('Line 2');
  console.log('Line 3');
}

/**
 * A function with high complexity to test cognitive complexity metrics.
 * @param {number} n - Input number
 * @returns {number} Some computed value
 */
function complexFunction(n) {
  let result = 0;
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        result += i;
      } else {
        result -= i;
      }
      if (result > 100) {
        result = 100;
      }
    }
  } else {
    result = -1;
  }
  return result;
}

// Export the functions as a module
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  duplicateFunction1,
  duplicateFunction2,
  complexFunction
};

// Example usage
if (require.main === module) {
  console.log('Sum:', add(5, 3));
  console.log('Difference:', subtract(5, 3));
  console.log('Product:', multiply(5, 3));
  console.log('Quotient:', divide(6, 2));
  complexFunction(10);
}
