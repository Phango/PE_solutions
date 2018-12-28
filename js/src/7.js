var common = require("./Common");

function answer(count) {
  var a = common.getPrimeNumbersUpToCount(count)
  return a.pop();
}

// answer(6);
console.log(answer(10001));
