var common = require('./../src/Common');

test('multiply', () => {
  expect(common.multiply(1, 2)).toEqual(2);
  expect(common.multiply(5, 2)).toEqual(10);
  expect(common.multiply(3, 33)).toEqual(99);
});

test('multiply on array', () => {
  expect([1,2,3].reduce(common.multiply)).toEqual(6);
  expect([1,5,10].reduce(common.multiply)).toEqual(50);
});

test('getRange', () => {
  expect(common.getRange(1,10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  expect(common.getRange(2,8)).toEqual([2,4,6,8,10,12,14,16]);
});

test('getTriangleNumber', () => {
  expect(common.getTriangleNumber(5)).toEqual(15);
  expect(common.getTriangleNumber(10)).toEqual(55);
});

test('getFactors', () => {
  expect(common.getFactors(10)).toEqual([1,2,5,10]);
  expect(common.getFactors(28)).toEqual([1,2,4,7,14,28]);
});

test('getFactorial', () => {
  expect(common.getFactorial(3)).toEqual(6);
  expect(common.getFactorial(6)).toEqual(720);
});

test('memoized getFactorial', () => {
  var memoizedFactorial = common.memoize(common.getFactorial);
  expect(memoizedFactorial(3)).toEqual(6);
  expect(memoizedFactorial(6)).toEqual(720);
})