// var common = require("./Common");
// var primes = require("./Prime");

function answer(start) {

  var collatzSequenceLength = 0;
  var largestLength = 0;
  var largestStartPoint = start;

  for (var i = start; i > 0; i--) {
    collatzSequenceLength = getCollatzSequence(i).length;
    
    if (collatzSequenceLength > largestLength) {
      largestLength = collatzSequenceLength;
      largestStartPoint = i;
    }

  }
  
  return largestStartPoint;

}

function getCollatzSequence(start) {
  var collatzSequence = [start];
  var current = start;
  var next;
  while (current !== 1) {
    next = getNextCollatz(current)
    collatzSequence.push(next);
    current = next;
  }
  return collatzSequence;
}

function getNextCollatz(input) {
  if ( input % 2 === 0 ) {
    return input / 2;
  } else {
    return (3 * input) + 1;
  }
}

// console.log(answer(13));
console.log(answer(999999));

module.exports = {
  answer: answer,
  getNextCollatz: getNextCollatz,
  getCollatzSequence: getCollatzSequence
}; 