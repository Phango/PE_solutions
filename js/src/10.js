var common = require("./Common");

function answer(limit) {
  var primes = common.getPrimeNumbersUpToValue(limit);
  // console.log(primes)
  return primes.reduce(function(prev, curr) {
    return prev + curr;
  });
}

console.log(answer(2000000));
