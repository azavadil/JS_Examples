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
var pattern = /(.)hort/g; 
 
 
/**
 * Note: 
 * -----
 * there's also a short form for accessing the constructor properties 
 */ 

if (pattern.test(text)){ 
 console.log(RegExp.$_); 
 console.log(RegExp["$`"]); 
 console.log(RegExp["$'"]); 
 console.log(RegExp["$&"]); 
 console.log(RegExp["$+"]); 
 console.log(RegExp["$*"]); 
}