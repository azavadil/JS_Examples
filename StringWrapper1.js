/**
 * Primitive wrappers
 * -----
 * String wrapper
 */ 

// create new wrapper instance
var sObj = new String("hello world"); 


var strVal = "hello world"; 
console.log(strVal.length); 
console.log(strVal.charAt(1)); 
console.log(strVal.charCodeAt(1));

// you can also use bracket notation
console.log(strVal[1]); 


var res = strVal.concat(" I'm here"); 
console.log(res); 
console.log(strVal); 

var res2 = strVal.concat(" Who's world is this?", " world is mine"); 
console.log(res2);


/** 
 * Slice: 
 * -----
 * @param1: where the capture begins
 * @param2: where the capture stops (not inclusive of the end point)
 *
 * substring: 
 * ----------
 * @param1: where the capture begins
 * @param2: where the capture stops (not inclusive of the end point)
 * all negative numbers are converted to zero
 * 
 * substr: 
 * @param1: where the capture begins
 * @param2: number of chars to capture
 */ 
 
console.log(strVal.slice(3));			//lo world 
console.log(strVal.substring(3)); 		//lo world
console.log(strVal.substr(3)); 			//lo world
console.log(strVal.slice(3,7)); 		//lo w	
console.log(strVal.substring(3,7)); 	//lo w
console.log(strVal.substr(3,7)); 		//lo world
 
console.log(strVal.slice(-3));			//rld 
console.log(strVal.substring(-3)); 		//hello world (all negatives converted to 0)
console.log(strVal.substr(-3)); 	 	//rld
console.log(strVal.slice(3,-4)); 		//lo w	
console.log(strVal.substring(3,-4)); 	//hel (all negatives converted to 0, equive to substring(0,3) because 
										// substring expects smaller number first
										
console.log(strVal.substr(3,-4)); 		//empty (negative number of chars makes no sense)
 
  