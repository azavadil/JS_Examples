/**
 * Function Expressions
 * --------------------
 * Closures and variables
 *
 * Since each function has the createFunctions() activation object in its
 * scope chain they are all refering to the same variable i. Since every function 
 * references the same variable object in which i exists, the value of i inside 
 * each function is 10
 */
 
function createFunction() { 
	var result = new Array(); 
		
	for (var i=0; i < 10; i++){ 
		result[i] = function(){
			return i; 
		}; 
	}
	return result; 
}

/**
 * Note
 * ----
 * with this version each function returns a different number. An anonymous
 * function is defined and called immediately. The variable i is passed as an 
 * argument to the anonymous function. Since function arguments are passed by 
 * value, the current value of i is copied into the argument num 
 */ 
 


function createFunction() { 
	var result = new Array(); 
		
	for (var i=0; i < 10; i++){ 
		result[i] = function(num){
			return function(){
				return num;
			}
		}(i); 
	}
	return result; 
}

