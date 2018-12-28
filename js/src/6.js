var common = require("./Common");

function answer(upperLimit) {
  var range = common.getRange(1, upperLimit);
  // console.log(range)

  var sumOfSquares = range.map(square).reduce(function(prev, curr) {
    return prev + curr;
  });

  var squareOfSum = range.reduce(function(prev, curr) {
    return prev + curr;
  }) ** 2;

  return squareOfSum -  sumOfSquares;
}

function square(a) {
  return a**2;
}

// console.log(answer(10));
console.log(answer(100));
