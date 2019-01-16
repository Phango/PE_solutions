/*jshint esversion: 6 */
var prime = require('./Prime');

function add(a,b) {
  return a + b;
}

function minus(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function getRange(a, b) {
  // return Array.from({length: b}, (v, k) => (k+1) * a);
  var array = [];
  for(var i=1; i<=b; i++) {
    array.push(i*a);
  }
  return array;
}

function getTriangleNumber(place) {
  // return getRange(1, place).reduce(add);
  return place * (place+1) / 2;
}

function getFactors(target) {
  var primeFactors = prime.getPrimeFactors(target);
  var factors = [].concat(primeFactors);
  
  for (var i=0; i<primeFactors.length; i++) {
    const value = target/primeFactors[i];
    if (factors.indexOf(value ) === -1) {
      factors.push(target/primeFactors[i]);
    }
  }
  
  return factors.concat([1,target]).sort(minus);
}

module.exports = {
  multiply: multiply,
  getRange: getRange,
  getTriangleNumber: getTriangleNumber,
  getFactors: getFactors 
}; 