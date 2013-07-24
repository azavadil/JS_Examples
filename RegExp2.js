/**
 * Note: Regular expressions 
 * -----
 * @param g: global, pattern applied to all of string instead of stopping after first match 
 * @param i: case insensitive
 * @param m: multiline mode
 *
 * var expression = /pattern/flags;
 */ 

 
 
var text = "mom and dad and baby"; 
var pattern = /mom( and dad ( and baby)?)?/gi; 

var matches = pattern.exec(text); 
console.log(matches.index); 
console.log(matches.input); 
console.log(matches[0]); 
console.log(matches[1]); 
console.log(matches[2]); 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
