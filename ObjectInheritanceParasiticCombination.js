/**
 * Inheritance
 * -----------
 * Parasitic combination inheritance
 */
 
 
function SuperType(name){
	this.name = name; 
	this.colors = ["red", "blue", "green"]; 
}

SuperType.prototype.sayName = function(){
	console.log(this.name); 
};

function SubType(name, age){
	SuperType.call(this, name); 
	
	this.age = age; 
}

SubType.prototype = new SuperType(); 
SubType.prototype.constructor = SubType; 
SubType.prototype.sayAge = function(){
	console.log(this.age); 
}; 

function inheritPrototype(subType, superType){ 
	var prototype = object(superType.prototype); 
	prototype.constructor = subType; 
	subType.prototype = prototype; 
}

function SuperType(name){
	this.name = name; 
	this.colors = ["red", "blue", "green"]; 
}

SuperType.prototype.sayName = function(){ 
	console.log(this.name); 
}; 

function SubType(name, age){ 
	SuperType.call(this, name); 
	
	this.age = age; 
}

inheritPrototype(SubType, SuperType); 

SubType.prototype.sayAge = function(){
	console.log(this.age); 
}