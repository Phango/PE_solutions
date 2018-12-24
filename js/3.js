function answer(target) {  
  var primes = getPrimeNumbersUpToValue(Math.sqrt(target));

  var primeFactors = []

  for(var i=1; i<primes.length; i++) {
    if (target % primes[i] === 0) {
      primeFactors.push(primes[i]);
    }
  }

  return primeFactors.pop();
}

function getPrimeNumbersUpToValue(value) {
  var sequence = getRange(1, value);
  return sequence.filter(isPrime);
}

function getRange(a, b) {
  return Array.from({length: b}, (v, k) => (k+1) * a);
}

function isPrime(number) {
  if (number <= 0) {
    return false;
  }

  for (var i=2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

var target = 600851475143;
// var target = 13195;
console.log(answer(target));