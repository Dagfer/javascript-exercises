const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(array) {
	const summed = array.reduce((total, item) => {
     return total + item
  }, 0)
  return summed;
};

const multiply = function(array) {
  const multiplied = array.reduce((total, item) => {
    return total * item
 }, 1)
 return multiplied;
};

const power = function(firstNum, secondNum) {
	return firstNum ** secondNum

};

const factorial = function(factorNum) {
  if (factorNum === 0 || factorNum === 1){
    return 1;
  }
  else if (factorNum >= 2){
    const factorArray = [];
    for (i = factorNum; i > 0; i--){
      factorArray.push(i);
    } 
     return factorTotal = factorArray.reduce((total, item) => {
      return total * item;
   }, 1);
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
