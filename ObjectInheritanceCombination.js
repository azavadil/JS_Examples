/**
 * Inheritance
 * -----------------
 * Combination inheritance combines prototype chaining and constructor stealing
 *
 * Use prototype chaining to inherit properties and methods on the prototype and 
 * use constructor stealing to inherit instance properties
 */ 
 
function SuperType(name){
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){
	console.log(this.name); 
}


function SubType(name, age){
	//inherit properties
	SuperType.call(this,name); 
	
	this.age = age; 
}

//inherit methods
SubType.prototype = new SuperType(); 

SubType.prototype.sayAge = function(){
	console.log(this.age); 
}


var i1 = new SubType("Cage", 40); 
i1.colors.push("black"); 
console.log(i1.colors); 
i1.sayName();
i1.sayAge(); 

var i2 = new SubType("Kidman", 44);
console.log(i2.colors); 
i2.sayName();
i2.sayAge();

