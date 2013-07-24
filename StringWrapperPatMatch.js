/**
 * String wrapper
 * ------------------
 * Pattern-matching
 */ 

var text = "cat, bat, sat, fat"; 
var pattern = /.at/;


// same a pattern.exec(text); 
var matches = text.match(pattern); 
console.log(matches.index); 
console.log(matches); 
console.log(matches[0]); 
console.log(pattern.lastIndex); 


var pos = text.search(/at/); 
console.log(pos); 



/**
 * replace method
 * --------------
 * @param1: either a string or a RegExp object
 * @param2: string or a function which specifies the replacement text
 * 
 * Note: we can use a function as the second argument to achieve greater control
 * over the replacement text. 
 */ 
 
var result = text.replace("at", "ond"); 
console.log(result); 

result = text.replace(/at/g, "ond"); 		// use a RegExp with 'g' flag to replace all instances 
console.log(result); 

/** 
 * Note: 
 * -----
 * we can also use the RegExp capture as part of the replacement
 */ 
 
var text = "cat, bat, sat, fat"; 
result = text.replace(/(.at)/g, "word ($1)"); 
console.log(result); 

/** 
 * Note: 
 * -----
 * we can acheive greater control over the replacement text by using a 
 * function 
 */ 

function htmlEscape(text) { 
	return text.replace(/[<>"&]/g, function(match, pos, originalText){
		switch(match){
			case "<":
				return "&lt;"; 
			case ">": 
				return "&gt;"; 
			case "&": 
				return "&amp;"; 
			case "\"": 
				return "&quot;"; 
		}
	}); 
}

console.log(htmlEscape("<p class=\"greeting\">Hello world1</p>")); 

/** 
 * split 
 * -----
 * we can split on either a string or a RegExp object
 * 
 * @param1: string or RegExp object
 * @param2: length of array (i.e. we can attenuate the return array 
 */ 



var colorText = "red, blue, green, yellow"; 
var colors1 = colorText.split(","); 
var colors2 = colorText.split(",", 2); 
var colors3 = colorText.split(/[^\,]+/); 

console.log(colors1); 
console.log(colors2); 
console.log(colors3); 
