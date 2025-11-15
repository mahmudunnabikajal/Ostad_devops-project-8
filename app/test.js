const { add, subtract, multiply, divide } = require('./index');

describe('Math Functions', () => {
  test('add should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('subtract should return the difference of two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
  });

  test('multiply should return the product of two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(0, 5)).toBe(0);
  });

  test('divide should return the quotient of two numbers', () => {
    expect(divide(6, 2)).toBe(3);
  });

  test('divide should throw error when dividing by zero', () => {
    expect(() => divide(1, 0)).toThrow('Division by zero');
  });
});