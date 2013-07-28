/**
 * Browser Object Model
 * --------------------
 * Window position
 * 
 * IE, Safari,Opera,Chrome: screenLeft, screenTop
 *
 * Firefox, Safari, Chrome: screenX, screenY
 */

 
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX; 

var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY; 

// move the window to the upper left coordinate
window.moveTo(0,0); 

// move the window down by 100 pixels
window.moveBy(0,100); 

// move the window to position (200, 300)
window.moveTo(200, 300); 

// move the window left by 50 pixels
window.moveBy(-50,0); 

/**
 * Browser Object Model
 * --------------------
 * Window size
 *
 * IE9, Firefox, Safari, Opera, Chrome: innerWidth, innerHeight, outerWidth, outerHeight
 * 
 * For IE9, Firefox, Safari, and Chrome outerWidth and outerHeight return the 
 * dimensions of the browser window itself (regardless of whether the methods are 
 * used on the topmost window object or a frame). 
 * 
 * document.documentelement.clientWidth and document.documentElement.clientHeight 
 * provide width and height of the page viewport (IE, Firefox, Safari, Opera, Chrome)
 * 
 * no accurate way to the determine the size of the browser window but it is 
 * possible to the dimensions of the page viewport
 */  


/**
 * Note
 * ----
 * Get viewport dimensions. 
 */

var pageWidth = window.innerWidth; 
var	pageHeight = window.innerHeight; 
	
if(typeof pageWidth != "number"){
	if(document.compatMode == "CSS1Compat"){
		pageWidth = document.documentElement.clientWidth; 
		pageHeight = document.documentElement.clientHeight; 
	} else {
		pageWidth = document.body.clientWidth; 
		pageHeight = document.body.clientHeight; 
	}
}

// resize browser window
window.resizeTo(100,100); 

window.resizeBy(100,50); 

window.resizeTo(300,300); 
