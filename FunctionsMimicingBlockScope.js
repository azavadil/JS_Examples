/**
 * Functions
 * ---------
 * Mimic block scope
 * 
 * This technique is often used in the global scope outside of functions 
 * to limit the number of variables and functions added to the global scope
 */ 

 
(function(){
	var now = new Date(); 
	if(now.getMonth() == 0 && now.getDate() == 1){
		console.log("Happy New Year"); 
	}
})(); 