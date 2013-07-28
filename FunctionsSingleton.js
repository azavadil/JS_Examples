/**
 * Function
 * --------
 * Module pattern
 * 
 * Creates private variables and privileged methods for singletons. Singletons are objects
 * which there will only ever be one instance. 
 */
 
 var singleton = { 
	name: value, 
	method: function(){
		//method code here
	}
}; 

/**
 * Function
 * --------
 * Module pattern aguments literal notation. Uses an anonymous function that returns 
 * an object. Inside the anonymous function an object literal is returned as the function 
 * value. The object literal contains the properties and methods that should be public. 
 * Since the object is defined inside the anonymous function, all of the public methods
 * have access to the private variables and functions. Essentially the object literal
 * defines the public interface for the singleton. Useful when the singleton requires 
 * initializatoin and access to private variables. 
 *
 * Common to use a singleton that manages application level information
 */ 
 
var singleton =  (function(){
	//private variables and functions
	var privateVariable = 10; 
	
	function privateFunction(){
		return false; 
	}
	
	//privileged/public methods and properties
	return { 
		publicProperty: true, 
		
		publicMethod: function(){
			privateVariable++; 
			return privateFunction(); 
		}
	}; 
}(); 

/**
 * Singleton example
 * -----------------
 * creates an application object that manages components. 
 */ 
 
var application =  (function(){
	//private variables and functions
	var components = new Array(); 

	//initialization
	components.push(new BaseComponent()); 
	

	//public interface
	return { 
		getComponentCount: function(){ 
			return components.length; 
		}, 
		
		registerComponent : function(component){ 
			if(typeof component == "object"){
				components.push(component); 
			}
		}
	}; 
}(); 
