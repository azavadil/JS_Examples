/**
 * Object Prototypes
 * -------------------
 * Prototype, alternate syntax
 *
 * The difference with enumeration syntax is the constructor property no longer points to Person
 * When a function is created it's prototype object is created and the constructor is automatically 
 * assigned. This syntax overwrites the default prototype object completely and the constructor 
 * property is equal to that of a completely new object
 */ 
 
function Person(){
}

Person.prototype = { 
	name: "Nick", 
	age: 29, 
	job: "Actor", 
	sayName: function(){ 
		console.log(this.name); 
	}
}; 

var p1 = new Person(); 
console.log(p1 instanceOf Object);			//true 
console.log(p1 instanceOf Person);			//true
console.log(p1.constructor == Person);		//false
console.log(p1.constructor == Object);		//true

/**
 * Note
 * ---- 
 * The constructor can be set explicitly if needed.
 */
 
function Person2(){
}
 
// setting the constructor in this manner creates a property with enumerable set to true, non standard
Person2.prototype = {
	constructor: Person, 
	name: "Nick", 
	age: 29, 
	job: "Actor", 
	sayName: function(){ 
		console.log(this.name); 
	}
}; 


function Person3(){
}
 
// to get standard behavior we can set the constuctor using Object.defineProperty(), setting enumerable to false
Person3.prototype = { 
	name: "Nick", 
	age: 29, 
	job: "Actor", 
	sayName: function(){ 
		console.log(this.name); 
	}
}; 

Object.defineProperty(Person3.prototype, "constructor", { 
	enumerable: false, 
	value: Person
}); 