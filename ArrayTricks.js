/**
 * Note: 
 * -----
 * Arrays: out of bounds
 */ 


var colors = ["red", "blue", "green"] 
var names = []; 


console.log(colors.length); 
console.log(names.length); 

// length is not read-only. we can use length to slice an array

colors.length = 2; 
console.log(colors[2]); 

var c2 = ["white", "silver", "blue"]; 
c2.length = 4; 
console.log(c2[3]); 
console.log(c2[4]);

// we can use length as a shortcut to add elements to the end of the array
c2[c2.length] = "grey"; 
c2[c2.length] = "black"; 

console.log(c2);

// we can add an element at an arbitrary index. we end up with 'undefined' in the interim section
c2[10] = "gold"; 
console.log(c2);
console.log(c2[6]);
