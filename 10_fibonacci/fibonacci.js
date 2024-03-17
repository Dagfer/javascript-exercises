const fibonacci = function(fiboIndex) {
    if (fiboIndex < 0) return "OOPS";
    const array = [0, 1];
    for (i = 0; i <= fiboIndex; i++){
      
     fibNum = array[i] + array[i + 1]
      array.push(fibNum)
   }
     return array[fiboIndex]
   };


// Do not edit below this line
module.exports = fibonacci;
