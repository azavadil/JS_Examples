/**
 * Browser Object Model
 * --------------------
 * Global scope
 *
 * window object doubles as the Global object. All variables and functions declared
 * globally become properties and methods of the window object. 
 * 
 * Difference between defining a global variable and defining a property directly on 
 * window. Global variables cannot be removed with delete operator
 */
 
var age = 29; 
function sayAge(){
	console.log(this.age); 
}
console.log(window.age); 
sayAge(); 
window.sayAge();
 

window.color = "red"; 

delete window.age; 		//error, can't delete Global
console.log(window.age); 

delete window.color; 
console.log(window.color);

/**
 * Note
 * ----
 * Attempting to access an undeclared variable is an error. It is possible to check for 
 * the existence of a potentially undeclared variable. 
 */
 
var newValue = oldValue //error, oldValue undeclared

var newValue = window.oldValue	//ok, property lookup. 
