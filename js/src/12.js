var common = require("./Common");
var prime = require("./Prime");


function getTriangleNumbers(a, b) {
  var array = [];
  for(var i=1; i<=b; i++) {
    array.push();
  }
  return array;
}

function answer(target) {
  var primeFactors = []; 
  


  
  var factors = [];

  var i = 1;
  while(factors.length < target) {
    primeFactors = prime.getPrimeFactors(i);
    
    factors = common.getFactors(triangleNumber);
    i++;
  }
  return triangleNumber;
}

console.log(answer(5));
// console.log(answer(500));

module.exports = {
  answer: answer
}; 