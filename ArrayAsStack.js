/**
 * Note: 
 * -----
 * using arrays as stacks
 */ 

var colors = new Array(); 
var count = colors.push("red", "green"); 

console.log(count); 
console.log(colors); 

count = colors.push("black"); 
console.log(count); 

var item = colors.pop(); 
console.log(item); 

