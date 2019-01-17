var common = require("./Common");
var primes = require("./Prime");
var numbers = require("./../data/13").numbers;

function answer(numbers) {
  var sum = 0;

  for ( var i=0; i<numbers.length; i++) {
    sum += numbers[i]
  }

  return sum
}

console.log(answer(numbers));
