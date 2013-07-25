/**
 * Object prototypes
 * -----------------
 * Durable constructor pattern
 */ 
 
function Person(name, age, job){ 
	var o = new Object(); 
	
	//option: define private variables/functions here
	
	//attach methods
	o.sayName = function(){
		console.log(name); 
	}
	 
	//return the object
	return o; 
}

var p = Person("Cage", 30, "Actor"); 
p.sayName();