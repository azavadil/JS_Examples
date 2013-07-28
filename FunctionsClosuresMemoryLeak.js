/**
 * Functions
 * ---------
 * ClosuresMemory Leaks
 */


/**
 * Note
 * ----
 * This code creates a memory leak. The anonymous function keeps a reference 
 * to the assignHandler() functions activation object, which prevents the reference
 * count for element from be decremented. 
 */

 
function assignHandler(){
	var element = document.getElementById("someElement"); 
	element.onclick = function(){
		console.log(element.id); 
	}; 
}

/**
 * Note
 * ----
 * This code corrects the memory leak. A copy of element's ID is stored in the
 * variable that is used in the closure. That step is not enough. The closure has
 * a reference to the containing function's entire activation object, which contains 
 * element. Even if the closure doesn't reference element directly, a refernce is 
 * still stored in the containing function's activation object
 */


function assignHandler(){
	var element = document.getElementById("someElement"); 
	var id = element.id
	element.onclick = function(){
		console.log(element.id); 
	}; 
	element = null; 
}