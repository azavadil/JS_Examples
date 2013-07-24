
/**
 * Note: 
 * ----
 * Objects can the own properties or properties inherited from a prototype
 */ 


var school = {schoolName:"Cornell"}; 

console.log("schoolName" in school); 
console.log("schoolType" in school); 
console.log("toString" in school); 

/** 
 * Note: 
 * -----
 * We can check whether an object has it's own property or whether the property is inherited
 */
 
var school = {schoolName:"Cornell"}
 
console.log(school.hasOwnProperty("schoolName")); 
console.log(school.hasOwnProperty("toString"));  