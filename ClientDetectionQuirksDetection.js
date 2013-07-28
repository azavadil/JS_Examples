/**
 * Client detection
 * ----------------
 * Quirks detection
 */ 

 
/**
 * Example
 * -------
 * check if instance properties with the same name as prototype properties do 
 * not appear in for-in loops. 
 */ 
 
var hasDontEnumQuirk = function(){
	var o = { toString : function(){} ); 
	for (var prop in o){
		if (prop == "toString"){
			return false; 
		}
	}
	return true; 
}(); 

var hasEnumShadowsQuirk = function(){
	var o = { toString :function(){}}; 
	var count = 0; 
	for (var prop in o){
		if (prop == "toString"){
			count++; 
		}
	}
	
	return (count > 1); 
}(); 



