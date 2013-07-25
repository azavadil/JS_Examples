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

var o = { 
	toString : function() {	
		return "My Object"; 
	}
}; 

/**
 * Note
 * ----
 * In Internet explorer this alert is never displayed because of a bug
 * The prototype's Enumerable attribute is operative instead of the instance attribute.
 * Same holds for hasOwnProperty(), toLocaleString(), toString(), valueOf()
 */ 


for (var prop in o){
	if(prop == "toString"){
		console.log("found toString"); 
	}
}

/**
 * Note
 * ----
 * use Object.keys() to retrieve a list of all enumerable properties on an object
 * 
 * use Object.getOwnPropertyNames() to get a list of all instance properties (enumerable and non-enumerable)
 */ 

var keys = Object.keys(Person.prototype); 
console.log(keys); 
var p1 = new Person(); 
p1.name = "Rob"; 
p1.age = 31;
var p1keys = Object.keys(p1); 
console.log(p1keys); 

var keys2 = Object.getOwnPropertyNames(Person.prototype); 
console.log(keys2); 