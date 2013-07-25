/**
 * Object prototypes
 * -----------------
 * Native Object prototype, used to modify objects like Object, Array, String
 */ 

console.log(typeof Array.prototype.sort); 
console.log(typeof String.prototype.substring); 

// add a method to the String prototype
String.prototype.startsWith = function(text){
	return this.indexOf(text) == 0; 
}

var msg = "Hello World"; 
console.log(msg.startsWith("Hello")); 

/**
 * Problems with prototypes
 * -----------------
 * No ability to pass initialization arguments into the constructor
 * 
 * ALL properties on the prototype are shared. That's good for functions 
 * and primitive value but a problem for reference values
 */ 

function Person (){}

Person.prototype = { 
	constructor: Person, 
	name: "Nick", 
	age: 40, 
	job: "Actor", 
	friends: ["Pam", "Holly"], 
	sayName: function() { 
		console.log(this.name); 
	}
}; 

var p1 = new Person(); 
var p2 = new Person(); 

p1.friends.push("Wilder"); 

// here we see the shared nature of the friends property (because friends is an array)
console.log(p1.friends); 
console.log(p2.friends); 
console.log(p1.friends === p2.friends); 
