var common = require("./Common");

function answer(upperLimit) {
  var range = common.getRange(1,upperLimit);
  var primes = common.getPrimeNumbersUpToValue(upperLimit);
  // console.log(primes);

  var base = primes.reduce(common.multiply);
  // console.log(base)

  var loopLimit = 30;

  var candidates = common.getRange(1,loopLimit).map(function(value) {
    return base * value;
  });

  // console.log(candidates)

  for (var i=0; i<candidates.length; i++) {
    var dividend = candidates[i];

    var isRangeFactor = range.map(function(divisor) {
      return isFactor(dividend, divisor)
    }).reduce(function(prev, curr) {
      return prev && curr;
    });

    if (isRangeFactor) {
      console.log(dividend);
    }
  }  
}

function isFactor(dividend, divisor) {
  return dividend % divisor === 0;
}

// answer(10);
answer(20);
