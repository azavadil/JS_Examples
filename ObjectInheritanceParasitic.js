/**
 * Inheritance
 * -----------
 * Parasitic inheritance
 */
 
function createAnother(original){ 
	var clone = Object(original); 
	clone.sayHi = function() { 
		console.log("Hi"); 
	}
	return clone; 
}

var person = { 
	name: "Cage", 
	friends: ["Shelby", "Cort", "Van"]
}; 

var anotherPerson = createAnother(person); 
anotherPerson.sayHi(); 