function multiply(a,b) {
  return a * b;
}
function getRange(a, b) {
  return Array.from({length: b}, (v, k) => (k+1) * a);
}
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (var i=2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function getPrimeNumbersUpToValue(value) {
  return getRange(1, value).filter(isPrime);
}
function getPrimeNumbersUpToCount(count) {
  var primes = [];
  for (var i=2; primes.length<count; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

module.exports = {
  multiply: multiply,
  getRange: getRange,
  isPrime: isPrime,
  getPrimeNumbersUpToValue: getPrimeNumbersUpToValue,
  getPrimeNumbersUpToCount: getPrimeNumbersUpToCount,
};
