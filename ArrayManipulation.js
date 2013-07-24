/**
 * Note: 
 * -----
 * Manipulating arrays
 */ 

 
 
var colors = ["red", "green", "blue"]; 

// we can use concat to append items to an array
var colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors);
console.log(colors2); 

// we can also use concat to copy an array

var clone = colors.concat(); 
colors[0] = "orange"; 

console.log(colors); 
console.log(clone);     // clone[0] is still "red"

/** 
 * Slice
 * -----
 * @param1: the index to start the slice
 * @param2: the end position (not inclusive)
 */ 


var c1 = ["red", "green", "blue", "yellow", "purple","white","silver", "black", "gold"]; 
var c2 = c1.slice(1);                // in python c1[1:]
var c3 = c1.slice(3,5);  			 // in python c1[3:5] 

console.log(c2); 
console.log(c3); 

/**
 * Splice 
 * ------
 * Splice can be used for delete, insertion, replacement
 */ 
 
 
// deletion
var a1 = ["red", "green", "blue", "yellow", "purple","white","silver", "black", "gold"]; 
a1.splice(3,2); 
console.log(a1);
 
// insertion 
var a2 = ["red", "green", "blue", "white", "silver", "black", "gold"] 
a1.splice(1,2,"magenta", "teal"); 
console.log(a1); 
 
// replacement
var a3 = 	["red", "magenta", "teal", "white", "silver", "black", "gold"]; 
a3.splice(2,3,"maroon", "yellow"); 
console.log(a3); 

 
 