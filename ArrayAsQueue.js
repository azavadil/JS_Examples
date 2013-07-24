/**
 * Note: 
 * -----
 * using arrays as queues
 */ 


var colors = new Array(); 

var count = colors.push("red", "green"); 
console.log(count);
console.log(colors); 

count = colors.push("black"); 
console.log(count); 
console.log(colors);

var item = colors.shift(); 
console.log(item); 
console.log(colors); 

var c2 = new Array(); 
var count = c2.unshift("red","green"); 
console.log("c2 = " + c2.toString());

count = c2.unshift("black");
console.log("c2 = " + c2.toString()); 

var item = c2.pop(); 
console.log(item); 
console.log("c2 = " + c2.toString());  