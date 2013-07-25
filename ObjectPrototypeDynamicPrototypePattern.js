/**
 * Object prototypes
 * -----------------
 * Dynamic prototype pattern
 *
 * Maintains the benefits of using a constuctor and a prototype by initializing 
 * the prototype inside the constructor if needed. 
 
 */ 

function Person(name, age, job){
	
	this.name = name; 
	this.age = age; 
	this.job = job; 
	
	if (typeof this.sayName != "function"){
		Person.prototype.sayName = function() {
			console.log(this.name); 
		}; 
	}
}

var friend = new Person("Nick", 29, "Actor"); 
friend.sayName();
