/**
 * Objects
 * ------------------
 * Reading property attributes
 */ 


var book = {};

Object.defineProperties(book, { 
	_year: { 
		value: 2004
	}, 
	
	edition: { 
		value: 1
	}, 
	
	year: { 
		get: function(){
			return this._year; 
		}, 
		
		set: function(val){ 
			if(val > 2004){ 
				this._year = val; 
				this.edition += val - 2004; 
			}
		}
	}
}); 

var descriptor = Object.getOwnPropertyDescriptor(book, "_year"); 
console.log(descriptor.value); 				//2004
console.log(descriptor.configurable); 		//false
console.log(typeof descriptor.get); 		//undefined

var descriptor = Object.getOwnPropertyDescriptor(book, "year"); 
console.log(descriptor.value); 				//undefined
console.log(descriptor.configurable); 		//false
console.log(typeof descriptor.get); 		//"function"
