const removeFromArray = function(targetArray, ...targetValues) {
   for (let i = 0 ; i < targetValues.length; i++){
    let index = targetArray.indexOf(targetValues[i]);
    if (index === -1) continue;
    targetArray.splice(index, 1);

   }
return targetArray
 
};
//let minedArray = targetArray.splice(indexOf(...values), 1)
// Do not edit below this line
module.exports = removeFromArray;
