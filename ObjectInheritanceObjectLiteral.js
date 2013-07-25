/**
 * Inheritance
 * -----------------
 * Object literals don't work with prototype chaining
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

SubType.prototype = { 
	getSubValue: function(){
		return this.subproperty; 
	}
}; 

var instance = new SubType(); 

/**
 * Note:
 * -----
 * this will be an error because we broke the prototype chain. 
 * The prototype no contains a new instance of Object instead
 * of an instance of SuperType
 */ 
 
console.log(instance.getSuperValue()); 
