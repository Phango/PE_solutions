var common = require("./Common");
var primes = require("./Primes").get();

function answer(target) {  
  var primeFactors = [];
  for(var i=1; i<primes.length; i++) {
    if (target % primes[i] === 0) {
      primeFactors.push(primes[i]);
    }
  }
  return primeFactors.pop();
}

// console.log(answer(13195));
console.log(answer(600851475143));