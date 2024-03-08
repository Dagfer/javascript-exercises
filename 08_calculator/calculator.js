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

const factorial = function() {
	
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
