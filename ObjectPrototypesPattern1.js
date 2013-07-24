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
p1.sayName(); 

var p2 = new Person(); 
p2.sayName()

console.log(p1.sayName == p2.sayName); 			     	//true

console.log(Person.prototype.isPrototypeOf(p1)); 		//true
console.log(Person.prototype.isPrototypeOf(p2)); 		//true


/**
 * Object Prototypes
 * -------------------
 * Although it's possible to read values on the prototype from object instances, it is not possible to overwrite them.
 * If you create the synonmous property on the instance, the instance property shadows the prototype property
 *
 * Once a property is added to the object instance, you have to delete the property from the instance to stop 
 * the shadowing (even setting the property to null at the instance level doesn't stop the shadowing). 
 */ 

function Person2(){}

Person2.prototype.name = "Nick"; 
Person2.prototype.age = 30; 
Person2.prototype.job = "Actor"; 
Person2.prototype.sayName = function() { 
	console.log(this.name); 
}; 

var p3 = new Person(); 
var p4 = new Person(); 

p3.name = "Tom"; 
console.log(p3.name); 	//from instance
console.log(p4.name);   //from prototype

p3.name = null;			
console.log(p3.name); 	//instance name is still shadowed
delete p3.name; 		//have to delete property to get prototype property
console.log(p3.name); 
