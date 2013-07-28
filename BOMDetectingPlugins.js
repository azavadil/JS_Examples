/**
 * Browser Object Model
 * --------------------
 * Detecting plug-ins
 *
 * for browsers other than IE whether a plug-in is present can be determined from 
 * the plug-ins array
 *
 * name: name of the plug-in
 * description: description of the plug-in
 * filename: filename for the plug-in
 * length: number of MIME types handled by this plug-in 
 */ 
 
 
// plug-in detection, doesn't work in IE

function hasPlugin(name){
	name = name.toLowerCase();
	for (var i=0; i < navigator.plugins.length; i++){ 
		if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
			return true; 
		}
	}
	return false; 
}

//detect flash
console.log(hasPlugin("Flash")); 

console.log(hasPlugin("Quicktime")); 


/**
 * Browser Object Model
 * --------------------
 * Detecting plug-ins in IE is more problematic because IE doesn't support
 * Netscape style plug-ins. The only way to detect plug-ins in IE is to use 
 * the proprietary ActiveXObject type and attempt to instantiate a particular 
 * plug-in. Plug-ins are implemented in IE using COM objects which are identified
 * by unique strings, so to check for a particular plug in you must know it's 
 * COM identifier
 */

//plugin detection for IE

function hasIEPlugin(name){
	
	try {
		new ActiveXObject(name); 
		return true; 
	} catch (ex) { 
		return false; 
	}
}
console.log(hasIEPlugin("ShockwaveFlash.ShockwaveFlash")); 
console.log(hasIEPlugin("QuickTime.QuickTime")); 

// typical to create functions that test for specific plugin

function hasFlash(){ 
	var result = hasPlugin("Flash"); 
	if(!result){
		result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash"); 
	}
	return result; 
}

function hasQuickTime(){ 
	var result = hasPlugin("QuickTime"); 
	if(!result){
		result = hasIEPlugin("QuickTime.QuickTime"); 
	}
	return result; 
}
