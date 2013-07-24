/**
 * Note: 
 * ----
 * Object literals have become the preferred way to pass args
 */ 

 
function displayInfo(args) { 
	var output = ""; 
	
	if (typeof args.name == "string"){ 
		output += "Name: " + args.name + "\n"; 
	}
	
	if (typeof args.age == "number"){
		output += "Age: " + args.age + "\n"; 
	}
	
	console.log(output); 
}

/**
 * Example
 * -------
 * passing object literal as argument
 */ 

displayInfo({ name:"Nicholas", age: 29}); 

displayInfo({ name: "Greg"}); 


