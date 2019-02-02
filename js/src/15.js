var common = require("./Common");
// var primes = require("./Prime");

function answer(gridSize) {
  var memoizedFactorial = common.memoize(common.getFactorial);
  return memoizedFactorial(gridSize + gridSize) / (memoizedFactorial(gridSize) * memoizedFactorial(gridSize) )
}

console.log(answer(2));
console.log(answer(20));