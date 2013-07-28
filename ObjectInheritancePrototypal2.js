/**
 * Inheritance
 * -----------
 * Prototypal formalized
 */
 
var person = { 
	name: "Cage", 
	friends: ["Shelby", "Court", "Van"]
}; 

var anotherPerson = Object.create(person); 
anotherPerson.name = "Greg"; 
anotherPerson.friends.push("Rob"); 

var yetAnotherPerson = Object.create(person); 
yetAnotherPerson.name = "Linda"; 
yetAnotherPerson.friends.push("Barbie"); 

console.log(person.friends); 

/**
 * Note
 * ----
 * instead of setting the property with anotherPerson.name = ... 
 * we can pass a second argument to Object.create()
 */

var finalPerson = Object.create(person, { 
	name: { 
		value: "Smithers"
	}
}); 

console.log(finalPerson.name); 