/**
 * Client detection
 * ----------------
 * Working with User-Agent Detection
 */ 
 

/** 
 * Note: 
 * -----
 * Code that relies on a specific version of a browser is to be avoided. The code is very 
 * fragile and would have to be updated with a new release of IE
 *
 * if (isIE6 || isIE7){ //avoid
 * 	//code
 * }
 * 
 * better
 * if (isVer >= 6 ) { 
 *	//code
 * } 
 */ 
 
 
/** 
 * Note: 
 * -----
 * The exact name and version of the browser isn't as important as the rendering 
 * engine. Example scrip focuses on detecting the 5 major rendering engines: IE, Gecko, 
 * WebKit, KHTML, Opera
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
	
	//detection of rendering engines/platforms/devices here
	
	return { 
		engine: engine
	}; 
}(); 

if(client.engine.ie){ 
	// IE-specific code
} else if (client.engine.gecko > 1.5){
	if(client.engine.ver == "1.8.1"){
		//do something for this version
	}
}

/** 
 * Note: 
 * -----
 * To identify the rendering engine, you need to test in a specific order. Testing out 
 * of order may result in erroneous results. The first step is to identify Opera since 
 * Opera's user-agent string may completely mimic other browsers. Opera's user-agent
 * string cannot be trusted since it won't in all cases identify itself as Opera. 
 *
 * to identify Opera you need to look for the window.opera object. The object is present in 
 * all versions of Opera 5 and later
 */ 
 
if(window.opera){
	engine.ver = window.opera.version(); 
	engine.opera = parseFloat(engine.ver)

/** 
 * Note: 
 * -----
 * the next locial rendering engine to detect is WebKit. Since WebKit's user-agent string 
 * contains "Gecko" and "KHTML", incorrect results could be returned if you check
 * for those rendering engines first. 
 *
 * WebKit's user-agent string is the only one to contain the string "AppleWebKit" so we 
 * can check for that
 */ 
 
var ua = navigator.userAgent; 

if(window.opera){
	engine.ver = window.opera.version(); 
	engine.opera = parseFloat(engine.ver)
} else if (/AppleWebKit\/(\S+)/.test(ua)){
	engine.ver = RegExp["$1"]; 
	engine.webkit = parseFloat(engine.ver); 
}

/** 
 * Note: 
 * -----
 * the next rendering engine to test for is KHTML. Once again the user-agent string contains
 * Gecko so we cannot accurately detect Gecko-based browsers before first ruling out KHTML. 
 * The KHTML version is included in the user-agent string. Since Konqueror 3.1 and earlier
 * didn't include the KHTML version, the Konquerer version is used instead
 */ 

var ua = navigator.userAgent; 

if(window.opera){
	engine.ver = window.opera.version(); 
	engine.opera = parseFloat(engine.ver)
} else if (/AppleWebKit\/(\S+)/.test(ua)){
	engine.ver = RegExp["$1"]; 
	engine.webkit = parseFloat(engine.ver); 
} else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+/.test(us)){
	engine.ver = RegExp["$1"]; 
	engine.khtml = parseFloat(engine.ver); 
}

/** 
 * Note: 
 * -----
 * If both Webkit and KHTML have been ruled out, it's safe to check for Gecko. The 
 * actual Gecko version does not appear after the string 'Gecko' in the user-agent 
 * string. Instead it appears after the string "rv:", requiring a more complicated
 * regular expression
 */ 

var ua = navigator.userAgent; 

if(window.opera){
	engine.ver = window.opera.version(); 
	engine.opera = parseFloat(engine.ver)
} else if (/AppleWebKit\/(\S+)/.test(ua)){
	engine.ver = RegExp["$1"]; 
	engine.webkit = parseFloat(engine.ver); 
} else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+/.test(us)){
	engine.ver = RegExp["$1"]; 
	engine.khtml = parseFloat(engine.ver); 
} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
	engine.ver = RegExp["$1"]; 
	engine.gecko = parseFloat(engine.ver); 
}

/** 
 * Note: 
 * -----
 * IE is the last rendering engine to detect
 */ 

 var ua = navigator.userAgent; 

if(window.opera){
	engine.ver = window.opera.version(); 
	engine.opera = parseFloat(engine.ver)
} else if (/AppleWebKit\/(\S+)/.test(ua)){
	engine.ver = RegExp["$1"]; 
	engine.webkit = parseFloat(engine.ver); 
} else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+/.test(us)){
	engine.ver = RegExp["$1"]; 
	engine.khtml = parseFloat(engine.ver); 
} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
	engine.ver = RegExp["$1"]; 
	engine.gecko = parseFloat(engine.ver); 
} else if (/MSIE ([^;]+/.test(ua)){ 
	engine.ver = RegExp["$1"]; 
	engine.ie = parseFloat(engine.ver); 
}


