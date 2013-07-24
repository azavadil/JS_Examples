/**
 * Primitive wrappers
 * -----
 * Boolean wrapper
 */ 


var booleanObject = new Boolean(true); 


/**
 * Note:
 * -----
 * This will not work as expected (i.e. result will be true). For boolean comparisons objects are automatically 
 * converted to true (i.e. we end up using the object, not the object value). 
 */ 


var falseObject = new Boolean(false); 
var result = falseObject && true; 
console.log(result);  

var falseValue = false; 
result = falseValue && true; 
console.log(result); 


console.log(typeof falseObject);    			//object
console.log(typeof falseValue); 				//boolean
console.log(falseObject instanceof Boolean); 	//true
console.log(falseValue instanceof Boolean); 	//false