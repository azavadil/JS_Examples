/**
 * Objects
 * ------------------
 * defining multiple properties
 */ 
 
var book = {}

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