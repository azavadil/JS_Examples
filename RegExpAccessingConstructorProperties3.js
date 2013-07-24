/**
 * Note: Regular expressions 
 * -----
 * @param g: global, pattern applied to all of string instead of stopping after first match 
 * @param i: case insensitive
 * @param m: multiline mode
 *
 * var expression = /pattern/flags;
 */ 

 
 
var text = "This has been a short summer"; 
var pattern = /(..)or(.)/g; 
 

if (pattern.test(text)){
	console.log(RegExp.$1); 
	console.log(RegExp.$2); 
}