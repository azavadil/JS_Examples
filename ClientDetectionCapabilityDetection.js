/**
 * Client detection
 * ----------------
 * Capability detection
 */ 
 
//basic capability detection pattern
 
if (object.propertyInQuestion){
	//use object.propertyInQuestion
}

/**
 * Capability detection
 * --------------------
 * Example: document.getElementById() didn't exist in IE4, although same functionality
 * could be achived with document.all. Let to capability detection
 */ 

function getElement(id){
	if(document.getElementById){
		return document.getElementById(id); 
	} else if(document.all){
		return document.all(id); 
	} else { 
		throw new Error("No way to retrieve element"); 
	}
}

/**
 * Note
 * ----
 * The most common way to achieve the result should be checked for first. 
 * Test for exactly what you want to use. Just because one capability exists 
 * doesn't mean another exists
 */ 
 
function getWindowWidth(){
	if(document.all){
		return document.documentElement.clientWidth; 
	} else { 
		return window.innerWidth;
	}
}

/**
 * Safer capability detection
 * --------------------------
 * validate that feature is present and has the appropriate behavoir. 
 * Using typeof if preferred whenever possible. 
 *
 * Not that the typeof approach is not infailable. Object may not return 
 * sensible value for typeof 
 */ 
 
//Avoid, sort may not do what you expect it to do
function isSortable(object){
	return !!object.sort; 
}

//This would return true even though it doesn't sort
var result = isSortable({ sort:true}); 

function isSortable(object){
	return typeof object.sort == "function"; 
}

//doesn't workd in IE <= 8 because typeof document.createElement returns "object"
function hasCreateElement(){
	return typeof document.createElement == "function"; 
}


/**
 * Note
 * ----
 * DOM objects are host objects and host objects are implemented via COM
 * instead of JScript in IE <= 8. As such the actual function document.createElement()
 * is implemented as a COM object
 * 
 * IE has further examples where using typeof doesn't behave as expected. ActiveX 
 * objects act very differently than other objects. 
 */ 
 
 //causes an error in IE
var xhr = new ActiveXObject("Microsoft.XHLHttp"); 
if(xhr.open){ //error here
 //do something
}; 
 
//complete way to test for existence

function isHostMethod(object, property){
	var t = typeof object(property); 
	return t == "function" || (!!(t=='object'&&object(property))) || t == 'unknown'; 
} 

result = isHostMethod(xhr, 'open'); 
result = isHostMethod(xhr, 'foo'); 



 
 



