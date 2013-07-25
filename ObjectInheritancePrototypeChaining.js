/**
 * Inheritance
 * -----------------
 * Prototype chaining
 * 
 * In order to override a supertype's method, the methods must be added 
 * to the prototype after the prototype has been assigned
 */ 
 
 function SuperType(){
	this.fromSuperType = "hello from SuperType"; 
}

SuperType.prototype.getSuperValue = function(){
	return this.fromSuperType;
}; 

function SubType(){
	this.subproperty = false; 
}

//inherit from SuperType
SubType.prototype = new SuperType(); 

SubType.prototype.getSubValue = function(){
	return this.subproperty; 
}; 

SubType.prototype.getSuperValue = function(){
	return false;
}; 


var instance = new SubType(); 
console.log(instance.getSuperValue()); 
