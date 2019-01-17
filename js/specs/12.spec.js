var problem = require('./../src/12');

test('5 and 10', () => {
  expect(problem.answer(5)).toEqual(28);
  expect(problem.answer(10)).toEqual(120);
  // console.log(answer(10)); // 16 120
});