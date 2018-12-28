var common = require("./Common");

function answer(limits) {
  var c = 0;
  var m = 2;

  while (c < limits) {

    for(var i=1; i<m; i++) {
      var a = m * m - i * i;
      var b = 2 * m * i;
      c = m * m + i * i;

      if (c > limits) {
        break;
      }
      
      if (a+b+c === limits) { 
        return a * b * c
      }
    }

    m++;
  }
}
// answer(1000)
console.log(answer(1000));
