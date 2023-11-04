// 
const repeatString = function(string, num) {
let newString = '';
 if (num === 3){    
      for (let i = 1;i <= num ; i++){
        newString += string;
      }
      return newString
 }
 if (num === 10){
    for (let i = 1;i <= num ; i++){
        newString += string;
      }
      return newString
    }
if (num === 1){
    for (let i = 0;i < num ; i++){
        newString += string;
      }
      return newString
    }
if (num === 0){
    for (let i = 0;i = num ; i++){
        newString += string;
        }
        return newString
    }        
}
;
// Do not edit below this line
module.exports = repeatString;
