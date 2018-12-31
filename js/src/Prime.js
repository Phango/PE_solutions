var PRIMES = JSON.parse(require("./../data/PRIMES").primes);

module.exports = {
  get: () => {
    return PRIMES;
  },
  isPrime: (number) => {
    if (number <= 1) {
      return false;
    }
    for (var i=2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  },
  getPrimeNumbersUpToCount: count => {
    return PRIMES.slice(0, count);
  },
  getPrimeNumbersUpToValue: value => {
    return PRIMES.filter(prime => {
      return prime <= value;
    });
  },
  getPrimeFactors: number => {
    var primes = module.exports.getPrimeNumbersUpToValue(Math.floor(number/2));
    var primeFactors = [];
  
    for(var i=0; i<primes.length; i++) {
      if (number % primes[i] === 0) {
        primeFactors.push(primes[i]);
      }
    }
    return primeFactors; 
  }
};
