/**
 * DOM
 * ---
 * Document information: the document object, as an instance of HTMLDocument, has several additional
 * properties that standard Document objects do not have. The properties provide information about the 
 * web page that is loaded
 * 
 * title: contains the text in the <title> element. Can be used to retrieve the text and to 
 *        change the page title
 */ 
 
var originalTitle = document.title; 
console.log(originalTitle);
 
document.title = "New page title"; 

/**
 * DOM
 * ---
 * URL: 	 the complete URL of the page
 * domain: 	 the domain name of the page
 * referrer: URL of the page that linked to this page
 * 
 * The domain property is the only one that can be set. There are some restrictions on what the value
 * of domain can be set to. If the URL contains a subdomain, such as p2p.wrox.com, the domain may only 
 * be set to wrox.com. The domain can never be set to a domain that the URL doesn't contain.
 *
 * Tightening of the domain property once it has been loosened is disallowed. You cannot set 
 * document.domain to "wrox.com" and then try to set it back to "p2p.wrox.com"
 */
 
var url = document.URL; 
console.log(url); 

var domain = document.domain; 
console.log(domain); 

var referrer = document.referrer; 
console.log(referrer); 

//from p2p.wrox.com
document.domain = "wrox.com";  		//ok 
document.domain = "nczonline.com";  //fails

/**
 * Note
 * ----
 * The ability to set document.domain is useful where there is a frame or iFrame on the page
 * from a different subdomain. Pages from different subdomains cannot communicate with one another
 * via javascript because of cross domain security restrictions. By setting document.domain in each 
 * page to the same value, the pages can access javascript objects from each other. 
 */ 
