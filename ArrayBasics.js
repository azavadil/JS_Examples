/**
 * Note: 
 * -----
 * Arrays: hetergenous
 */ 

var colors = new Array();


// we can also pass the size to the constructor

var colors20 = new Array(20); 

// we can initialize with an element,e.g. array with one element string "Cage" 
var names = new Array("Cage"); 

/** 
 * Note: 
 * -----
 * We can't initialize with a single integer. That will be interpreted as and array of 
 * size 3, not an array with one element 3
 */ 
var arraySize3 = new Array(3) 

// we can enumerate the value in the constructor
var colorsEnum = new Array("red", "blue", "green"); 

// we can use array literals 

var colors = ["red", "blue", "green"] 
var emptyArray = []; 

console.log(names); 
console.log(colorsEnum); 
console.log(colors); 