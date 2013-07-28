/**
 * Function
 * --------
 * Module augmetation pattern
 * 
 * Creates private variables and privileged methods for singletons. Singletons are objects
 * which there will only ever be one instance. 
 */
 
var singleton =  (function(){
	//private variables and functions
	var privateVariable = 10; 
	
	function privateFunction(){
		return false; 
	}
	
	//create object
	var object = new CustomType(); 
	
	//privileged/public methods and properties
	object.publicProperty = true; 
	
	object.publicMethod = function(){
		privateVariable++; 
		return privateFunction(); 
	}; 
	
	return object; 
	
}(); 


var application =  (function(){
	//private variables and functions
	var components = new Array(); 

	//initialization
	components.push(new BaseComponent()); 
	
	//create a local copy of the application
	var app = new BaseComponent();
	
	
	//public interface
	app.getComponentCount = function(){
		return components.length; 
	};
	
	app.registerComponent = function(component){
		if(typeof component == "object"){ 
			components.push(component); 
		}
	}; 
	
	//return it
	return app; 
}(); 
