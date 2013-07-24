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
 * we can access the properties of the RegExp constuctor. Even thought the constructor wasn't explicitly 
 * used in the declaration 
 */ 
 
if (pattern.test(text)){ 
 console.log(RegExp.input); 
 console.log(RegExp.leftContext); 
 console.log(RegExp.rightContext); 
 console.log(RegExp.lastMatch); 
 console.log(RegExp.lastParen); 
 console.log(RegExp.multiline); 
}

