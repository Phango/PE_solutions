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
