const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
 const ages = people.map((person) => {
  if ("yearOfDeath" in person) {
     return person.yearOfDeath - person.yearOfBirth}
  
  else {
        
       return currentYear - person.yearOfBirth
      }})
 ;
 ages.sort((a, b) => b - a);
 const oldest = people.find((person) => person.yearOfDeath - person.yearOfBirth === ages[0] || currentYear - person.yearOfBirth === ages[0]);
  return oldest
};


// Do not edit below this line
module.exports = findTheOldest;
