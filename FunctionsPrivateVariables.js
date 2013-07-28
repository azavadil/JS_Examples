/**
 * Function
 * --------
 * Private variables
 * 
 * Javascript has no concept of private members. All object properties are public. There
 * is however the concept of private variables. Any variable defined inside a function is 
 * considered private since it's inaccessible outside that function. 
 */
 
 
function add(num1, num2){
	var sum = num1 + num2; 
	return sum;
}

/**
 * Private variables
 * -----------------
 * If a closure is created inside a function, it has access to the function variables. 
 * We can use the closure's access to create public methods that have access to 
 * private variables. 
 */ 


function MyObject(){
	//private variables 
	var privateVariable = 10; 
	
	function privateFunction(){
		return false; 
	}
	
	//privileged methods
	this.publicMethod = function(){
		privateVariable++; 
		return privateFunction(); 
	}; 
}

/**
 * Private variables: 
 * -----------------
 * Hide date that should not be changed directly 
 */ 

function Person(name){
	
	this.getName = function(){
		return name; 
	}; 
	
	this.setName = function (value){
		name = value; 
	}; 
}

var person = new Person("Cage"); 
console.log(person.getName()); 
person.setName("Greg"); 
console.log(person.getName()); 