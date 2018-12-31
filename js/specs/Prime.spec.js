var primes = require("../src/Prime");

test('isPrime', () => {
  expect(primes.isPrime(1)).toBeFalsy();
  expect(primes.isPrime(5)).toBeTruthy();
  expect(primes.isPrime(10)).toBeFalsy();
  expect(primes.isPrime(137)).toBeTruthy();
});

test('getPrimeNumbersUpToValue', () => {
  expect(primes.getPrimeNumbersUpToValue(10)).toEqual([2,3,5,7]);
  expect(primes.getPrimeNumbersUpToValue(20)).toEqual([2,3,5,7,11,13,17,19]);
});

test('getPrimeNumbersUpToCount', () => {
  expect(primes.getPrimeNumbersUpToCount(5)).toEqual([2,3,5,7,11]);
  expect(primes.getPrimeNumbersUpToCount(10)).toEqual([2,3,5,7,11,13,17,19,23,29]);
});

test('getPrimeFactors', () => {
  expect(primes.getPrimeFactors(10)).toEqual([2,5]);
  expect(primes.getPrimeFactors(28)).toEqual([2,7]);
})
