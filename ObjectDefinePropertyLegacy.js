/**
 * Objects
 * ------------------
 * Object accessor
 *
 * accessor properties have four attributes
 * @param1: configurable
 * @param2: Enumerable
 * @param3: Get
 * @param4: Set
 */ 
 
var book = { 
	_year: 2004, 
	edition: 1
}; 

Object.defineProperty(book, "year", { 
	get: function(){
		return this._year;
	}, 
	
	set: function(newValue){ 
		if (newValue > 2004) { 	
			this._year = newValue; 
			this.edition += newValue-2004; 
		}
	}
}); 

book.year = 2005; 
console.log(book.edition); 
 
/**
 * Objects
 * ------------------
 * Legacy objectaccessor
 */
 
var b2 = { 
	_year: 2004, 
	edition: 1
}; 

b2.__defineGetter__("year", function(){ 
	return this._year; 
}); 

b2.__defineSetter__("year", function(val) { 
	if (val > 2004){ 
		this._year = val; 
		this.edition += val -2004;
	}
}); 

b2.year = 2005; 
console.log(b2.edition); 