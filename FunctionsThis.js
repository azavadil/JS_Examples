/**
 * Function Expressions
 * --------------------
 * this Object
 *
 * example: global variable name is created along with an object that contains
 * a property called name. Each function automatically gets two special variables:
 * this and arguments. An inner function can never access these variable 
 * directly from an outer function.  
 */
 
 
var name = "The Window"; 

var object = { 
	name: "My Object", 
	
	getNameFunc: function(){
		return function(){
			return this.name; 
		};
	}
}; 

console.log(object.getNameFunc()()); //"The Window"

/**
 * Note
 * ----
 * a variable name that is assigned to the this object
 * when the closure is defined it has access to the that 
 */ 


var object2 = { 
	name: "My Object", 
	
	getNameFunc: function(){
		var that = this
		return function(){
			return that.name; 
		};
	}
}; 

console.log(object2.getNameFunc()());