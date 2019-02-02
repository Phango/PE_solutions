var problem = require('../src/14');

test('next collatz', () => {
  expect(problem.getNextCollatz(13)).toEqual(40);
  expect(problem.getNextCollatz(20)).toEqual(10);
});

test('sequence', () => {
  expect(problem.getCollatzSequence(13)).toEqual([ 13, 40, 20, 10, 5, 16, 8, 4, 2, 1 ]);
})