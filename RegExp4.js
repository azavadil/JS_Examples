/**
 * Note: Regular expressions 
 * -----
 * @param g: global, pattern applied to all of string instead of stopping after first match 
 * @param i: case insensitive
 * @param m: multiline mode
 *
 * var expression = /pattern/flags;
 */ 

 
 
var text = "000-00-0000"; 
var pat = /\d{3}-\d{2}-\d{4}/; 

if (pat.test(text)){ 
	console.log("The pattern was matched"); 
}


// toString() and toLocaleString() return the same string
var pat2 = new RegExp("\\[bc\\]at", "gi"); 
console.log(pat.toString()); 
console.log(pat.toLocaleString()); 
