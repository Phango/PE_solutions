function answer(limit, a, b) {  
  var listA = getRange(a, Math.floor(limit / a));
  var listB = getRange(b, Math.floor(limit / b));
  
  var filteredListB = listB.filter(function(number) {
    return listA.indexOf(number) < 0;
  });

  var mergedList = listA.concat(filteredListB);

  return mergedList.reduce(function(a,b){
    return a + b;
  });
}

function getRange(a, b) {
  return Array.from({length: b}, (v, k) => (k+1) * a);
}

console.log(answer(1000, 3, 5));