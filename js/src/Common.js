/*jshint esversion: 6 */

function add(a,b) {
  return a + b;
}
function multiply(a,b) {
  return a * b;
}
function getRange(a, b) {
  // return Array.from({length: b}, (v, k) => (k+1) * a);
  var array = [];
  for(var i=1; i<b; i++) {
    array.push(i*a);
  }
  return array;
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
  // return getRange(1, value).filter(isPrime);

  var primes = [];
  var i = 2;
  while(i < value) {
    if(isPrime(i)) {
      primes.push(i);
    }
    i++;
  }
  return primes;
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
function getPrimeFactors(number) {
  var primes = getPrimeNumbersUpToValue(Math.floor(number/2));
  var primeFactors = [];

  for(var i=1; i<primes.length; i++) {
    if (number % primes[i] === 0) {
      primeFactors.push(primes[i]);
    }
  }
  return primeFactors;
}
function getTriangleNumber(place) {
  return getRange(1, place).reduce(add);
}
function getFactors(number) {
  return getPrimeFactors(number);
}

module.exports = {
  multiply: multiply,
  getRange: getRange,
  isPrime: isPrime,
  getPrimeNumbersUpToValue: getPrimeNumbersUpToValue,
  getPrimeNumbersUpToCount: getPrimeNumbersUpToCount,
  getTriangleNumber: getTriangleNumber,
  getPrimeFactors: getPrimeFactors,
  getFactors: getFactors
};
