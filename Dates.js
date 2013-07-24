/**
 * Note: 
 * -----
 * Dates are represented as an offset to January 1, 1970.
 */ 

var now = new Date(); 


// Date.parse will convert a string to an offset to Jan 1 1970
var someDate = new Date(Date.parse("May 25, 2004")); 


var someDate = new Date("May 25, 2004"); 

var y2k = new Date(Date.UTC(2000,0)); 

var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55)); 


var doSomething = function(num1, num2) { 
	console.log(num1 + num2); 
}; 



// get start time
var start = Date.now(); 

// call a function
doSomething(5,6); 

// get stop time
var stop = Date.now(); 
	
var result = stop - start; 
