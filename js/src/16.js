// var common = require("./Common");
// var primes = require("./Prime");

function answer() {
  return BigInt(Math.pow(2,1000)).toString().split("").reduce((a,b) => {return parseInt(a) + parseInt(b)})
}

// console.log(answer());
console.log("BigInt only works in Chrome at the moment, but the above code will give the correct answer")