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
  for(var i=1; i<=b; i++) {
    array.push(i*a);
  }
  return array;
}

function getTriangleNumber(place) {
  return getRange(1, place).reduce(add);
}

module.exports = {
  multiply: multiply,
  getRange: getRange,
  getTriangleNumber: getTriangleNumber
};
