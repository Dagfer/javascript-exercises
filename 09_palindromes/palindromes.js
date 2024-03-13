const palindromes = function (string) {
    const punctuation = ['.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '-', '_'];
    let newString = string.replaceAll(" ", "")
            let cleanString = '';
            for (let i = 0; i < newString.length; i++) {
                if (!punctuation.includes(newString[i])) {
                 cleanString += newString[i];
                 stringArray = cleanString.toLowerCase().split('');
                }
            } 
        
            if (stringArray.toReversed().toString() === stringArray.toString()){
                return true
            } else return false;  
            
       
    }
   
   
     
       
     

;

// Do not edit below this line
module.exports = palindromes;
