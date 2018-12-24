function add(a,b) {
  return a + b;
}
function multiply(a,b) {
  return a * b;
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
function getPrimeNumbersUpToValue(value) {
  return getRange(1, value).filter(isPrime);
}

module.exports = {
  multiply: multiply,
  getRange: getRange,
  isPrime: isPrime,
  getPrimeNumbersUpToValue: getPrimeNumbersUpToValue,
};
