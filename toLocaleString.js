/**
 * Note: 
 * -----
 * Detecting arrays. There's an issue of using the instanceof method on arrays. If you have multiple 
 * frames (and therefore two global execution contexts), then you have two versions of the Array constructor. 
 * work around this we use the Array.isArrayy() method 
 */ 

var colors = ["red", "blue", "green"] 

/** 
 * Note: 
 * ----
 * Conversion methods: toLocaleString(), toString90, and valueOf()
 */ 
 
console.log(colors.toString()); 
console.log(colors.valueOf()); 
console.log(colors);              

var person1 = { 
	toLocaleString : function () { 
		return "Nikolaos"; 
	}, 
	
	toString : function() { 
		return "Nicholas"; 
	}
}; 

var person2 = { 
	toLocaleString : function () { 
		return "Grigorios"; 
	}, 
	
	toString : function() { 
		return "Greg"; 
	}
}; 

var people = [person1, person2]; 
console.log(people); 
console.log(people.toString()); 
console.log(people.toLocaleString()); 
