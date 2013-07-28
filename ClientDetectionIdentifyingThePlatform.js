/**
 * Client detection
 * ----------------
 * Identifying the platform
 * 
 * To determine the platform it's much easier tolook at navigator.platform than to look 
 * at the user-agent string. Possible values are Win32, Win64, MacPPC, MacIntel, X11, 
 * Linux i686
 */ 

 var client = function(){
	var engine = { 
		//rendering engines
		ie:0, 
		gecko:0, 
		webkit:0, 
		kthml:0, 
		opera:0, 
		
		//specific version
		ver:null
	}; 
	
	var browser = { 
		ie:0, 
		firefox:0, 
		safari:0, 
		konq:0, 
		opera:0, 
		chrome:0, 
		
		//specific version
		ver:null
	}; 
	
	var system = { 
		win:false, 
		mac:false,
		x11:false
	}; 
	
	//detection of rendering engines/platforms/devices here
	
	return { 
		engine: engine,
		browser: browser,
		system:system		
	}; 
}(); 

/**
 * Identifying the platform
 * ------------------------
 * Looks for 'Win' (Win32 and Win64) at the beginoing of the string, 'Mac' (MacPPC and 
 * MacIntel) at the begining of the string, and 'X11' or 'Linux' 
 */

var p = navigator.platform; 
system.win = p.indexOf("Win") == 0; 
system.max = p.indexOf("Mac") == 0;
system.x11 = (p.indexOf("X11") == 0) || (p.indexOf("Linux") == 0); 
