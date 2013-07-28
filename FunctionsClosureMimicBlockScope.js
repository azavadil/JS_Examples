/**
 * Function Expressions
 * --------------------
 * Mimicing block scope
 */

function outputNumbers(count){ 
	for(var i = 0; i< count; i++){
		console.log(i); 
	}
	console.log(i); 
}

/**
 * Note
 * ----
 * i is definted as part of the outputNumbers() activation object
 */


function outputNumbers(count){ 
	for(var i = 0; i< count; i++){
		console.log(i); 
	}
	var i; 			//even redeclaring the var doesn't wipe out the value
	console.log(i); 
}

/**
 * syntax for anonymous functions used as block scope
 * --------------------------------------------------
 * (function(){ //block code })(); 
 */

function outputNumbers(num){ console.log(num);}
 
var count = 5; 
outputNumbers(count); 

outputNumbers(5); 	//we don't actually need the variable

var someFunction = function(){
	//block code
}; 

someFunction(); 

function outputNumbers2(count){
	(function(){
		for (var i = 0; i < count; i++){
			console.log(i); 
		}
	})(); 
	
	console.log(i);  //causes an error
	
}
