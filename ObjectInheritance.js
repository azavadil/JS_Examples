/**
 * Inheritance
 * -----------------
 * Prototype chaining
 * 
 * the default prototype for any function is an instance of Object(i.e. its internal
 * prototype pointer points to Object.prototype
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


var instance = new SubType(); 
console.log(instance.getSuperValue()); 

console.log(instance instanceof Object); 
console.log(instance instanceof SuperType); 
console.log(instance instanceof SubType); 

console.log(Object.prototype isPrototypeOf(instance)); 
console.log(SuperType.prototype isPrototypeOf(instance)); 
console.log(SubType.prototype isPrototypeOf(instance)); 