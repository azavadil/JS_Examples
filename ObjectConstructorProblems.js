/**
 * Object Constructors
 * -------------------
 * Problems with constructors
 */ 
 

/**
 * Problems with Constructors
 * --------------------------
 * Each instance gets its own instance of the sayName Function
 */ 
 
 
function Person(name, age, job){ 
	this.name = name; 
	this.age = age; 
	this.job - job; 
	this.sayName = new Function("console.log(this.name)"); 
}

var p1 = new Person("Nick", 40, "actor"); 
var p2 = new Person("Pam", 35, "Pyschologist"); 

console.log(p1.sayName == p2.sayName); 	//false

/**
 * Problems with Constructors
 * --------------------------
 * It's possible to work around this by declaring the function outside the constructor
 */ 


function Person2(name, age, job){ 
	this.name = name; 
	this.age = age; 
	this.job - job; 
	this.sayName = sayName; 
}

function sayName(){
	console.log(this.name);
}

var p3 = new Person2("Alec", 50, "actor"); 
var p4 = new Person2("Larry", 45, "CEO"); 

console.log(p3.sayName == p4.sayName); 	//true
