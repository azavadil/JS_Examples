/**
 * Browser Object Model
 * --------------------
 * System dialogs
 */

if (confirm("are you sure?")){
	//perform action
} else { 
	console.log("ok, we won't do that"); 
}


/**
 * prompt()
 * --------
 *
 * @param1: text to display to the user
 * @param2: default value for the text box
 */ 

var result = prompt("What is your name? ", ""); 
if (result != null){
	console.log("welcome " + result); 
}

/**
 * window.print() and window.find()
 * --------------------------------
 * both display asynchronously
 * same as using find or print from the browsers menu
 */ 

window.print()
window.find()