/**
 * Client detection
 * ----------------
 * Capability detection != browser detection
 */ 
 
// avoid
var isFirefox = !!(navigator.vendor && navigator.vendorSub); 

// avoid
var isIE == !!(document.all && document.uniqueID); 

/**
 * Note
 * ----
 * It may be appropriate to group capabilities into classes of browsers. 
 */ 
 
// determin if the browser has Netscape style plugins 
var hasNSPlugins = !!(navigator.plugins && navigator.plugins.length); 

// determine if the browser has basic DOM level 1 capabilities
var hasDOM1 = !!(document.getElementById && document.createElement && document.getElementsByTagName); 
