/**
 * Client detection
 * ----------------
 * Identifying Mobile devices
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
		x11:false,
	
		//mobile devices
		iphone:false, 
		ipod:false, 
		ipad:false, 
		ios:false, 
		android:false, 
		nokiaN:false, 
		winMobile:false 
	}; 
	
	//detection of rendering engines/platforms/devices here
	
	return { 
		engine: engine,
		browser: browser,
		system:system		
	}; 
}(); 


system.iphone = ua.indexOf("iPohone") > -1; 
system.iphone = ua.indexOf("iPod") > -1; 
system.ipad = ua.indexOf("iPad") > -1; 

/**
 * Client detection
 * ----------------
 * Identifying iOS version. Prior to iOS 3, the user-agent string simply said 
 * "CPU like Mac OS X" while later it changed to "CPU iPhone OS 3_0 like Mac OS X"
 */ 


if (system.max &&  ua.indexOf("Mobile") > -1) { 
	if(/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)){
		system.ios = parseFloat(RegExp.$1.replace("_", ".")); 
	} else {
		system.ios - 2; 
	}
}

/**
 * Client detection
 * ----------------
 * Determine Android version. Since all versions of Andriod include the version 
 * number the regular expression accurated captures the version
 */ 

 if(/Android (\d+\.\d+/.test(ua)) { 
	system.android = parseFloat(RegExp.$1); 
	
/**
 * Client detection
 * ----------------
 * Nokia Nseries mobile phones also use WebKit. The user-agent string is very similar to
 * other WebKit based phones. 
 *
 * Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/11.0.026; 
 * Profile MIDP-2.0 configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) 
 * Safari/413
 */ 
 
 system.nokiaN = ua.indexOf("NokiaN") > -1; 
 
 /**
 * Client detection
 * ----------------
 * Example usage
 */ 

if(client.engine.webkit){
	if(client.system.ios){
		//iOS stuff
	} else if (client.system.android){
		//andriod stuff
	} else if (client.system.nokiaN){
		//nokia stuff
	}
}

/**
 * Client detection
 * ----------------
 * MSFT mobile
 *
 * Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) Asus;Galaxy6
 */ 

 //windows mobile
 if (system.win == "CE"){
	system.winMobile = system.win; 
} else if (system.win == "Ph"){
	if(/Windows Phone OS (\d+.\d+)/.test(ua)){
		system.win = "Phone"; 
		system.winMobile = parseFloat(RegExp["$1"]); 
	}
}




