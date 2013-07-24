/**
 * Note: Primitive wrappers
 * -----
 * String wrapper
 */ 

/** 
 * Note: 
 * -----
 * What happens
 * 1. creates an insteance of String type
 * 2. calls the specified method
 * 3. destroys the instance
 */  
 
var s1 = "some text"; 
var s2 = s1.substring(2); 

var s3 = "some text"; 
s3.color = "red"; 
console.log(s3.color); //doesn't work, String instance has been destroyed


/**
 * Note: 
 * -----
 * Object constructor acts as a factory method
 */ 
 
var obj = new Object("some text"); 
console.log(obj instanceof String); 


/**
 * Note: casting funcion vs. wrapper
 * ---------------------------------
 * here number is the primitive 25
 */ 
 
var val = "25"; 
var number = Number(val);    
console.log(typeof number); 


// numObj is an instance of the Number wrapper
var numObj = new Number(val); 
console.log(typeof numObj); 
