function answer(limit) {  
  var fib = generateFibonacciSequenceUpToValue(limit);
  var evenFib = fib.filter(isEven);
  return evenFib.reduce(add);
}

function add(a,b) {
  return a + b;
}

function isEven(a) {
  return a % 2 === 0;
}

function generateFibonacciSequenceUpToLength(length) {
  var sequence = [1,2];
  for (var i=2; i<length; i++) {
    sequence.push(sequence[i-2] + sequence[i-1]);
  }
  return sequence;
}

function generateFibonacciSequenceUpToValue(value) {
  var sequence = [1,2];
  for (var i=2; sequence[i-1] < value; i++) {
    sequence.push(sequence[i-2] + sequence[i-1]);
  }
  return sequence;
}

console.log(answer(4000000));
