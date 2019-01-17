var common = require("./Common");
var prime = require("./Prime");

function answer(target) {
  var triangleNumber = 0;
  var factors = [];
  var i = 1;

  while(factors.length < target) {
    triangleNumber = common.getTriangleNumber(i);
    factors = common.getFactors(triangleNumber);
    i++;
  }
  // console.log(i)
  // console.log(factors);
  return triangleNumber;
}

// console.log(answer(5)) // 8 28
// console.log(answer(10)); // 16 120
// console.log(answer(20)); // 33 528
// console.log(answer(30)); // 64 2016
// console.log(answer(500)); // 12376 76576500

module.exports = {
  answer: answer
}; 