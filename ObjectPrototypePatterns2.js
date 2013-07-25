/**
 * Object Prototypes
 * -------------------
 * Prototype pattern
 */ 
 
function Person(){
}

Person.prototype.name = "Nick"; 
Person.prototype.age = 30; 
Person.prototype.job = "Actor"; 
Person.prototype.sayName = function() { 
	console.log(this.name); 
}; 

var p1 = new Person(); 
var p2 = new Person(); 

console.log(p1.hasOwnProperty("name")); 		//false

p1.name = "Greg"; 
console.log(p1.hasOwnProperty("name")); 		//true


console.log(p2.hasOwnProperty("name")); 		//false, only has prototype property

delete p1.name
console.log(p1.hasOwnProperty("name"));			//now false, relying on prototype property again

/**
 * Object Prototypes
 * -------------------
 * usage of 'in'
 * 
 * since in returns true if the property is in the instance or the prototype, we can use the in 
 * operator and hasOwnProperty to determine if the property is in the instance or the prototype
 * 
 */ 

console.log("name" in p1); 						//true, from prototype
p1.name = "Greg"; 
console.log("name" in p1); 						//true, from instance

delete p1.name

console.log(p1.hasOwnProperty("name")); 		// false		
console.log("name" in p1); 						// true, property must exist in prototype

console.log(hasPrototypeProperty(p1,"name")); 	// not working, should return true because name comes from prototype
p1.name = "Greg"; 
console.log(hasPrototypeProperty(p1,"name")); 	// should return false, "name" now comes from instance not prototype

