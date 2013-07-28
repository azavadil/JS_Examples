/**
 * Function Expressions
 * -----------
 * Recursion
 */
 
function factorial(num){ 
	if (num <= 1) { 
		return 1; 
	} else { 
		return num * factorial(num-1);
	}
}

var anotherFactorial = factorial; 
factorial = null; 

/**
 * Note
 * ----
 * Error, factorial has been set to null. Lookup fails when we hit the 
 * recursive call to factorial 
 */
console.log(anotherFactorial(4)); //error


function factorial(num){ 
	if (num <= 1) { 
		return 1; 
	} else { 
		return num * arguments.callee(num-1);
	}
}

