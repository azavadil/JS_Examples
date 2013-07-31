/**
 * DOM
 * ---
 * Locating elements
 *
 * The document object has several special collections. Each of these collections is an HTMLCollection
 * object and provides faster access to common parts of the document
 * 
 * document.anchors: 	Contains all <a> elements with a name attribute 
 * document.applets: 	Contains all <applet> elements in the document. This collect is deprecated
 * document.forms: 		Contains all <form> elements in the document. Same as document.getElementsByTagName("form")
 * document.images: 	Contains all <img> elements in the document. Same as document.getElementsByTagName("img")
 * document.links: 		Contains all <a> elements with an href attribute in the document
 */
  
/**
 * DOM
 * ---
 * Conformance Detection. Because there are multiple parts of the DOM, it's necessary to determine 
 * exactly what parts of the DOM a browser has implemented. The document.implementation property 
 * is an object containing information and functionality tied directly to the browser's implementation 
 * of the DOM. DOM level 1 specifies only one method on document.implementation which is hasFeature(). 
 * The hasFeature() method accepts two arguments: 
 * @param1: the name of the DOM feature to check 
 * @param2: the version of the DOM feature to check
 */

var hasXMLDom = document.implementatin.hasFeature("XML", "1.0"); 

/**
 * Note
 * ---
 * implementer decides if the implementation is conformant, but that doesn't mean the implementation 
 * conforms to all the specifications it claims to. 
 */  
