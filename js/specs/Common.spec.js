var common = require('./../src/Common');

test('multiply 1 * 2 to equal 2', () => {
  expect(common.multiply(1, 2)).toBe(2);
});