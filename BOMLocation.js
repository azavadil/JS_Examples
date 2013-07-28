/**
 * Browser Object Model
 * --------------------
 * Location object
 * 
 * provides information about the document current loaded in the window. Location 
 * object is unique in that it is a property of both window and document (i.e. 
 * window.location and document.location point to the same object
 */
 
function getQueryStringArgs(){
	var qs = (location.search.length > 0 ? location.search.substring(1) : ""), 
	
		//object to hold data
		args = {},
	
		//get individual items
		items = qs.length ? qs.split("&") : [], 
		item = null,
		name = null, 
		value = null, 
	
		//used in for loop
		i = 0, 
		len = items.length; 
		
	//assign each item onto the args object
	for (i=0; i < len; i++){
		item = items[i].split("="); 
		
		name = decodeURIcomponent(item[0]); 
		value = decodeURIcomponent(item[1]); 
	
		if (name.length){ 
			args[name] = value; 
		}
	}

	return args; 
}

// assume query string of ?q=javascript&num=10
var args = getQueryStringArgs(); 
console.log(args["q"]); 
console.log(args["num"]); 
