var common = require("./Common");
var prime = require("./Prime");

function answer(target) {
  console.log(prime.getPrimeFactors);
  var primeFactors = prime.getPrimeFactors(target);
  console.log(primeFactors);
}

console.log(answer(10));
