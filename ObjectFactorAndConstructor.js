/**
 * Objects
 * ------------------
 * Factory Pattern, not frequently used because it doesn't solve the problem of object identification
 * 
 */ 
 
 
 
function createPerson(name, age, job){
	var o = new Object(); 
	o.name = name; 
	o.age = age; 
	o.job = job; 
	o.sayName = function(){
		console.log(this.name); 
	}
	return o; 
}
var p1 = createPerson("Nick", 29, "Lawyer"); 
var p2 = createPerson("Cage", 40, "Actor"); 

/**
 * Constructor pattern
 * -------------------
 * Note: convention is to capitalize the first letter of constructor functions
 * 
 * To create a new instance use the new operator
 * 1. creates a new object
 * 2. assign the this value of the constructor to the new object
 * 3. execute code inside the constructore
 * 4. return the new object
 * 
 */ 
 

function Person(name, age, job){
	this.name = name; 
	this.age = age; 
	this.job = job; 
	this.sayName = function(){
		console.log(this.name); 
	}
}
var p3 = new Person("Alba", 31, "Actress"); 
var p4 = new Person("Middleton", 30, "Princess");  

// both objects have a constructor property that points back to Person
console.log(p3.constructor == Person); 
console.log(p4.constructor == Person); 

// objects are considers instance of both Object and Person
console.log(p3 instanceof Object); 
console.log(p3 instanceof Person); 
console.log(p4 instanceof Object); 
console.log(p4 instanceof Person); 