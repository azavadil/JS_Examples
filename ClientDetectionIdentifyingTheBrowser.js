/**
 * Client detection
 * ----------------
 * Identifying the browser
 * 
 * Usually identifying the browswer's rendering engine is enough to determine the correct 
 * course of action. However, the rendering engine alone doesn't indicate that JavaScript
 * functionality is present. e.g. Safari and Chrome both use WebKit as their rendering
 * engine but use different javascript engines. 
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
	
	//detection of rendering engines/platforms/devices here
	
	return { 
		engine: engine
		browser: browser
	}; 
}(); 

 
 
var ua = navigator.userAgent; 

if(window.opera){
	engine.ver = browser.ver = window.opera.version(); 
	engine.opera = browser.opera = parseFloat(engine.ver)
} else if (/AppleWebKit\/(\S+)/.test(ua)){
	engine.ver = RegExp["$1"]; 
	engine.webkit = parseFloat(engine.ver); 
	
	//discern between Chrome and Safari
	if(/Chrome\/(\S+)/.test(ua)){ 
		browser.ver = RegExp["$1"]; 
		browser.chrome = parseFloat(browser.ver); 
	} else if (/Version\/(\S+)/.test(ua)){ 
		browser.ver = RegExp["$1"]; 
		browser.safari = parseFloat(browser.ver); 
	} else { 
		//approximate verision
		var safariVersion = 1; 
		if(engine.webkit < 100){
			safariVersion = 1; 
		} else if (engine.webkit < 312) { 
			safariVersion = 1.2; 
		} else if (engine.webkit < 412){
			safariVersion = 1.3; 
		} else { 
			safariVersion = 2; 
		}
		
		browser.safari = browser.ver = safariVersion; 
	}
} else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+/.test(us)){
	engine.ver = browser.ver = RegExp["$1"]; 
	engine.khtml = browser.konq = parseFloat(engine.ver); 
} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
	engine.ver = RegExp["$1"]; 
	engine.gecko = parseFloat(engine.ver); 
	
	//determine if it's firefox
	if (/Firefox\/(\S+)/.test(ua)){
		browser.var = RegExp["$1"]; 
		browser.firefox = parseFloat(browser.ver); 
	}
	
} else if (/MSIE ([^;]+/.test(ua)){ 
	engine.ver = browser.ver = RegExp["$1"]; 
	engine.ie = browser.ie = parseFloat(engine.ver); 
}


/**
 * Example
 * ------- 
 * Usage case
 */ 
 
if (client.engine.webkit){ 
	if(client.browser.chrome){ 
		//do something for chrome
	} else if (client.browser.safari){
		//do something for safari
	} else if (client engine.gecko){ 
		if(client.browser.firefox{ 
			//do something for Firefox
		} else { 
			//do something for other Gecko browsers
		}
	}
}


