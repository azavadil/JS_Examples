/**
 * Object prototypes
 * -----------------
 * Combination Constructor/Prototype pattern
 * 
 * The constructor patter defines instance properties 
 * The prototype pattern defines methods and shared properties
 * 
 * With this approach, each instance ends up with its own copy of the instance
 * properties and they all share references to methods. 
 */ 

function Person(name, age, job){
	this.name = name; 
	this.age = age;
	this.job;
	this.friends = ["Shelby", "Court"]; 
}

Person.prototype = { 
	constructor: Person, 
	sayName: function(){
		console.log(this.name); 
	}
}; 

var p1 = new Person("Nick", 30, "Actor");
var p2 = new Person("Greg", 27, "Doctor"); 

p1.friends.push("Van"); 

console.log(p1.friends);  					//Shelby, Court, Van
console.log(p2.friends); 					//Shelby, Court
console.log(p1.friends === p2.friends); 	//false
console.log(p1.sayName === p2.sayName); 	//true


