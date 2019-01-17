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
  var factors = [];
  var i = 1;

  while (i <= Math.sqrt(target)) {
    if( target % i === 0) {
      if (target / i === i) {
        factors.push(i)
      } else {
        factors.push(i)
        factors.push(target / i)
      }
    }
    i++;
  }

  return factors.sort(minus);
}

module.exports = {
  multiply: multiply,
  getRange: getRange,
  getTriangleNumber: getTriangleNumber,
  getFactors: getFactors 
}; 