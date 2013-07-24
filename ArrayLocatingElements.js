/**
 * Note: 
 * -----
 * locating array elements
 */ 

var chars = ["a","b","c","d","e","d","c","b","a"]; 
 
console.log(chars.indexOf("c")); 
console.log(chars.lastIndexOf("c")); 
 
console.log(chars.indexOf("c", 5)); 
console.log(chars.lastIndexOf("c",4)); 

var person = {name:"Nick"}; 

var people = [{name:"Nick"}]; 

var morePeople = [person]; 

console.log(people.indexOf(person)); 
console.log(morePeople.indexOf(person)); 
 
