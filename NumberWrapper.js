/**
 * Primitive wrappers
 * -----
 * Number wrapper
 */ 


// auto-conversion behind the scenes
var num = 10; 
console.log(num.toString()); 
console.log(num.toString(2));   		//specify the radix, this specifies binary, prints as 1010
console.log(num.toFixed(2)); 

num =  10.005; 
console.log(num.toFixed(2)); 
console.log(num.toFixed(2)); 

console.log(num.toExponential(1)); 


var n2 = 99; 
console.log(n2.toPrecision(1)); 
console.log(n2.toPrecision(2));
console.log(n2.toPrecision(3));


// creating a number object
var numObj = new Number(10); 
var numVal = 10; 
console.log(typeof numObj); 			//object
console.log(typeof numVal);				//number
console.log(numObj instanceof Number); 	//true
console.log(numVal instanceof Number);  //false