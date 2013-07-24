/**
 * Objects
 * ------------------
 * Object literal
 */  

 

var person = { 
	name: "Nick", 
	age: 29, 
	job: "software engineer", 
	
	sayName: function(){
		console.log(this.name); 
	}
};

/**
 * Data properties
 * ------------------
 * @param configurable: can property be redefined via delete (default true)
 * @param Enumerable: is property return in for-in (default true)
 * @param Writable: can the property value be changed (default true)
 * @param Value: data value (default undefinted)
 */  

/**
 * Changing default properties
 * ------------------
 * Object.defineProperty()
 * @param1: object on which the property is to be added or modified
 * @param2: name of the property
 * @param3: descriptor object (configurable, enumerable, writable, value)
 */  

 var p2 = {};
 Object.defineProperty(p2,"name", {
	writable: false, 
	value: "Cage"
}); 

console.log(p2.name); 
p2.name = "Stamos";
console.log(p2.name);

var p3 = {}
Object.defineProperty(p3, "name", { 
	configurable: false, 
	value: "Thrun"
}); 

console.log(p3.name); 
delete p3.name;
console.log(p3.name); 


/**
 * Note
 * ----
 * Once a property has been defined as nonconfigurable it cannot become configurable
 */ 
 
var p4 = {}; 
Object.defineProperty(p4, "name", { 
	configurable: false, 
	value: "Jack"
}); 

// ERROR
Object.defineProperty(p4, "name", { 
	configurable: true, 
	value: "Jack"
}); 