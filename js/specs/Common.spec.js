var common = require('./../src/Common');

test('multiply', () => {
  expect(common.multiply(1, 2)).toEqual(2);
  expect(common.multiply(5, 2)).toEqual(10);
  expect(common.multiply(3, 33)).toEqual(99);
});

test('getRange', () => {
  expect(common.getRange(1,10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  expect(common.getRange(2,8)).toEqual([2,4,6,8,10,12,14,16]);
});

test('isPrime', () => {
  expect(common.isPrime(1)).toBeFalsy();
  expect(common.isPrime(5)).toBeTruthy();
  expect(common.isPrime(10)).toBeFalsy();
  expect(common.isPrime(137)).toBeTruthy();
});

test('getPrimeNumbersUpToValue', () => {
  expect(common.getPrimeNumbersUpToValue(10)).toEqual([2,3,5,7]);
  expect(common.getPrimeNumbersUpToValue(20)).toEqual([2,3,5,7,11,13,17,19]);
});

test('getPrimeNumbersUpToCount', () => {
  expect(common.getPrimeNumbersUpToCount(5)).toEqual([2,3,5,7,11]);
  expect(common.getPrimeNumbersUpToCount(10)).toEqual([2,3,5,7,11,13,17,19,23,29]);
});
