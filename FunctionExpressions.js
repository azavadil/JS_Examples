/**
 * Function Expressions
 * -----------
 * 
 */
 
sayHi(); 
function sayHi(){
	console.log("Hi"); 
}

var functionName = function(arg0, arg1, arg2){
	//body
}; 

// function expressions must be assigned before use

sayHello();					//error
var sayHello = function(){
	console.log("Hello"); 
};

/**
 * Note
 * ----
 * these are function declarations and the engine will try to hoist the 
 * defintions before the code evaluates
 */ 
 
if(condition){ 
	function sayHi(){
		console.log("Hi"); 
	}
} else { 
	function sayHi() { 
		console.log("Yo"); 
	}
}

// ok

var sayHi; 

if(condition){ 
	sayHi = function sayHi(){
		console.log("Hi"); 
	}
} else { 
	sayHi = function sayHi() { 
		console.log("Yo"); 
	}
}
