const leapYears = function(year) {
  let leap;
    if (year % 100 === 0 && year % 400 !== 0 || year % 4 !== 0){
        leap = false;
} else {
    leap = true;
}
return leap
};

// Do not edit below this line
module.exports = leapYears;
