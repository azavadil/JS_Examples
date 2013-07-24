/**
 * Note: Fuctions
 * -----
 * there are two ways to declare a function
 * 
 */ 



// function declaration  
function sum(num1, num2) { 
	return num1 + num2; 
}

// function expression
var sum2 = function(num1, num2){
	return num1 + num2; 
}

console.log(sum(2, 8)); 
console.log(sum2(14,7)); 

function dblSum(num1, num2){
	return 2*(num1 + num2); 
}

console.log(dblSum(4,4)); 

/** 
 * Note: 
 * -----
 * Important: we use the function name without parentheses to access the function pointer
 */
 
var aliasSum = dblSum;                 //function name withou parentheses
console.log(aliasSum(2,2)); 

dblSum = null; 
console.log(aliasSum(3,3)); 


