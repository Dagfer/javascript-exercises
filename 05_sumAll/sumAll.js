const sumAll = function(firstNum, lastNum) {
  let integers = [];
  let integerSum = 0
  let i = firstNum;
    do {
      integers.push(i);
      i++}
  while (i <= lastNum);

  integers.forEach(x => {
    integerSum += x;
     });
     return integerSum

    }

 


// Do not edit below this line
module.exports = sumAll;
