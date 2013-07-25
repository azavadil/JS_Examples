/**
 * Object Prototypes
 * -------------------
 * Prototypes can be mutated 
 */ 
 
var friend = new Person(); 

function Person(){}

Person.prototype.sayHi = function(){
	console.log("Hi"); 
}

friend.sayHi(); 	//works

Person.prototype = { 
	constructor: Person, 
	name: "Nick", 
	age: 30, 
	job: "Actor", 
	sayName: function(){ 
		console.log(this.name); 
	}
}; 

friend.sayName(); 	// error, we've broken the link between the constructor and the original prototype