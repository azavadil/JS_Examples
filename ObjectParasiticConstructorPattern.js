/**
 * Object prototypes
 * -----------------
 * Parasitic constructor pattern
 *
 * Exactly the same as the factory pattern except that the function 
 * is called as a constructor using the new operator. When a constructor
 * doesn't return a value, it returns the new object instance by default. 
 * Adding a return statement at the end of a constructor allows you to 
 * override the value that is returned when the constructor is called
 */ 
 
function Person(name, age, job){
	var o = new Object(); 
	o.name = name; 
	o.age = age; 
	o.job = job; 
	o.sayName = function(){
		console.log(this.name); 
	}
	return o;
}

var friend = new Person("Cage", 30, "Actor"); 
friend.sayName(); 