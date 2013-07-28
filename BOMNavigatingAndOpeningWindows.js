/**
 * Browser Object Model
 * --------------------
 * Navigating and Opening Windows
 */

// typically blocked 
window.open("http://www.wrox.com/", "topFrame"); 

/**
 * window.open()
 * -------------
 * 
 * @param1: URL to load
 * @param2: window target
 * @param3: string of features
 * @param4: Boolean indicating that the new page should take the place of the currently 
 *          loaded page
 * 
 * return value: reference to the newly created window
 */ 


window.open("http://www.wrox.com/", "wroxWindow", "height=400,width=400, top=10, left=10, resizeable=yes"); 

//return value: pointer to newly created window
var wroxWin = window.open("http://www.wrox.com/", "wroxWindow", "height=400,width=400, top=10, left=10, resizeable=yes"); 

//resize it
wroxWin.resizeTo(500,500); 

//move it
wroxWin.moveTo(100,100); 


wroxWin.close(); 

//check if the window closed
console.log(wroxWin.closed); 

//window has reference to the window that opened it
console.log(wroxWin.opener == window); 

/**
 * Note
 * ----
 * When one tab opens another, the window objects need to be able to communicate 
 * with one another, so the tabs cannot run in separate processes. Chrome allows
 * you to indicate that the newly created tab by setting the opener property to null
 */ 
 
wroxWin.opener = null; 

/**
 * Note
 * ----
 * Popup blockers
 * 
 * when a popup is blocked, window.open() typically throws an error. To accurately detect
 * when a pop-up has been blocked, check the return value and wrap the call to 
 * window.open in a try-catch block
 */ 

//check if a popup was blocked 
var wroxWin2 = window.open("http://www.wrox.com/", "_blank"); 
if(wroxWin2 == null){
	console.log("Popup blocked"); 
}
 

//check if a popup was blocked 

var blocked = false; 

try{
	var wroxWin2 = window.open("http://www.wrox.com/", "_blank"); 
	if(wroxWin2 == null){
		blocked = true; 
	} 
} catch (ex){
		blocked = true; 
}

if(blocked){ console.log("The popup was blocked"); }
