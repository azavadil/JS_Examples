/**
 * Primitive wrappers
 * ------------------
 * Location methods
 * Trim method
 */ 

var strVal = "hello world"; 
console.log(strVal.indexOf("o")); 
console.log(strVal.lastIndexOf("o")); 

console.log(strVal.indexOf("o", 6)); 
console.log(strVal.lastIndexOf("o", 6)); 


strVal = "Lorem ipsum dolor sit amet, consectetur adipisicing elit"; 
var positions = new Array(); 
var pos = strVal.indexOf("e"); 

while(pos> -1){ 
	positions.push(pos); 
	pos = strVal.indexOf("e", pos+1); 
}

console.log(positions.join("|")); 

var strVal2 = "     whose world is this     "; 
var trimmed = strVal2.trim(); 
console.log(strVal2); 
console.log(trimmed); 


var s3 = "hello world"; 
console.log(s3.toLocaleUpperCase()); 
console.log(s3.toUpperCase());
console.log(s3.toLocaleLowerCase());
console.log(s3.toLowerCase()); 

