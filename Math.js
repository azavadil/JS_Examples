/**
 * Math
 * ----
 * math object 
 */ 
 
var max = Math.max(33,54, 32,16); 
console.log(max); 

var min = Math.min(3,54,32,16); 
console.log(min); 

var vals = [1,2,3,4,5,6,7,8]; 
var max = Math.max.apply(Math, vals); 

console.log(Math.ceil(25.9)); 
console.log(Math.ceil(25.5)); 
console.log(Math.ceil(25.1)); 

console.log(Math.round(25.9)); 
console.log(Math.round(25.5)); 
console.log(Math.round(25.1)); 

console.log(Math.floor(25.9)); 
console.log(Math.floor(25.5)); 
console.log(Math.floor(25.1)); 


/**
 * Math
 * ----
 * Math.random() returns a random number between 0 and 1 (not including either 0 or 1)
 * number = Math.floor( Math.random() * total_num_of_choices + first_possible_value);
 */
 
var num1 = Math.floor(Math.random() * 10 + 1); 

var num2 = Math.floor(Math.random() * 9 + 2); 

function selectFrom(lowerVal, upperVal){
	var choices = upperVal - lowerVal + 1; 
	return Math.floor(Math.random() * choices + lowerVal); 
}

var num3 = selectFrom(2,10);
console.log(num3); 