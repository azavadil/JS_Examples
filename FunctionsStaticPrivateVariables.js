/**
 * Function
 * --------
 * Static private variables
 * 
 * a private scope is create to enclose the constructor and methods. Note that the constructor
 * is defined not with a function declaration but instead by using a function expression. 
 * Function declarations always create local functions (which is undesirable in this case). 
 * For the same reason, the var keyword is not used with MyObject. Remember, initializing an 
 * undeclared variable always creates a global variable, so MyObject becomes global 
 * and is available outside the private scope. 
 *
 * private variables and functions are shared amoung instances
 */
 
 (function(){
	//private variables and functions
	var privateVariable = 10; 
	
	function privateFunction(){
		return false; 
	}
	
	//constructor
	MyObject = function(){}; 
	
	//public and privileged methods
	MyObject.prototype.publicMethod = function(){
		privateVariable++; 
		return privateFunction(); 
	}
})(); 

(function(){
	var name = ""; 
	
	Person = function(value){
		name = value; 
	}; 
	
	Person.prototype.getName = function(){
		return name; 
	}; 
	
	Person.prototype.setName = function(value){ 
		name = value; 
	}; 
})(); 

var person1 = new Person("Cage");
console.log(person1.getName()); 
person1.setName("Greg"); 
console.log(person1.getName()); 

var p2 = new Person("Mike"); 
console.log(person1.getName()); 
console.log(p2.getName()); 














