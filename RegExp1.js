/**
 * Note: Regular expressions 
 * -----
 * @param g: global, pattern applied to all of string instead of stopping after first match 
 * @param i: case insensitive
 * @param m: multiline mode
 *
 * var expression = /pattern/flags;
 */ 

  
 
/**
 * Note: 
 * -----
 * metacharacters have to be escaped
 * metacharacters; ( [ { \ ^ $ | ) ] } ? * + . 
 */

// match all instances of "at"
var pat1 = /at/g; 

// match first instance of "bat" or "cat" 
var pat2 = /[bc]at/i; 

// match all three-character combinations ending with "at" 
var pat3 = /.at/gi; 

// match the first instance of "bat" or "cat" regardless of case
var pat4 = /[bc]at/i; 

// match the first instance of "[bc]at" regardless of case
var pat5 = /\[bc\]at/i; 

// match all instances of ".at" regardless of case
var pat6 = /\.at/gi; 

// match the first instance of "bat" or "cat" 
var pat7 = /[bc]at/i; 

// match the first instance of "bat" or "cat", use constructor
var pat8 = new RegExp("[bc]at", "i"); 


/**
 * Note: 
 * -----
 * Using a RegExp constructor is not exactly the same as using a literal. The constructor will always 
 * create a new instance while the literal does not
 */ 
 
var re = null, i; 

/** 
 * Note: 
 * -----
 * The book claimed that this would only match on the first time through the loop. There would be only one 
 * instance of the RegExp and the lastIndex (i.e. the index the pattern match starts) wouldn't get reset
 * after the first match
 */ 

for (i = 0; i < 10; i++){ 
	re = /cat/g; 
	console.log(i); 
	console.log(re.lastIndex);
	console.log(re.test("catastrophe")); 
}



for (i = 0; i < 10; i++){
	re = new RegExp("cat", "g");
	re.test("catastrophe"); 
} 
