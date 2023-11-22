const removeFromArray = function(targetArray, ...values) {
let index = targetArray.indexOf(...values);
targetArray.splice(index, 1);
return targetArray
};
//let minedArray = targetArray.splice(indexOf(...values), 1)
// Do not edit below this line
module.exports = removeFromArray;
