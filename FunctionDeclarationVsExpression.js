/**
 * Note: Fuctions
 * -----
 * Function declarations vs. function expressions. Key difference. Function declarations are read before 
 * the file is executed. Function expressions are read in the program flow (i.e. are only available after the 
 * function expression.
 */ 


// this is ok
console.log(sum(10,10)); 

function sum(num1, num2){ 
	return num1 + num2; 
}

// this is an error

console.log(sum2(20, 20)); 

var sum2 = function(num1, num2){
	return num1 + num2; 
}; 