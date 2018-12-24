function answer() {  
  var palindromeFound = false;
  for (var i=999; i>900; i--) {
    for(var j=999; j>900; j--) {
      if (isPalindrome(i * j)) {
        palindromeFound = true;
        console.log(i*j);
        break;
      }
    }
    if(palindromeFound) {
      break;
    }
  }
}

function isPalindrome(input) {
  return input.toString() === input.toString().split("").reverse().join("");
}

// console.log(isPalindrome(9009));

answer();