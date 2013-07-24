/**
 * Note: Fuctions
 * -----
 * Functions as values
 */ 


function callSomeFunction(someFunction, someArgument){ 
	return someFunction(someArgument); 
}

function add10(num){ 
	return num + 10; 
}

var res1 = callSomeFunction(add10, 5); 
console.log(res1);

function getGreeting(name){
	return "Hello, " + name;
}

var res2 = callSomeFunction(getGreeting, "Nick"); 
console.log(res2); 


function createComparisonFunction(propertyName){
	return function(obj1, obj2) { 
		var val1 = obj1[propertyName]; 
		var val2 = obj2[propertyName]; 
		
		if (val1 < val2) return -1; 
		else if (val1 > val2) return 1; 
		else return 0; 
	}; 
} 

var data = [{name:"Zach", age:28}, {name:"Nick", age:29}]; 


//sorted by name
data.sort(createComparisonFunction("name")); 
console.log(data[0]); 

//sorted by age
data.sort(createComparisonFunction("age")); 
console.log(data[0]); 