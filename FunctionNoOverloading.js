/**
 * Note: Fuctions
 * -----
 * No overloading   
 */ 

function addSomeNumber(num) { 
	return num + 10; 
}

function addSomeNumber(num) { 
	return num + 5; 
}

var result = addSomeNumber(10); 
console.log(result); 

// almost equivalent to 

var addSomeNumber2 = function(num) { 
	return num + 10; 
}

addSomeNumber2 = function(num) { 
	return num + 5; 
}

var result2 = addSomeNumber2(10); 
console.log(result2); 
