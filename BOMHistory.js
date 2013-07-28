/**
 * Browser Object Model
 * --------------------
 * Registering handlers
 * 
 * registerContentHandler() and registerProtocolHandler allow a website to indicate 
 * that it can handle specific types of information
 *
 * @param1: MIME type to handle
 * @param2: URL of the page that can handle MIME type
 * @param3: name of the application
 */ 
 
navigator.registerContentHandler("application/rss+xml", "http://www.somereader.com?feed=%s", "Some Reader"); 

navigator.registerProtocolHandler("mailto", "http://www.somemailclient.com?cmd=%s", "Some mail client"); 

 
/**
 * Browser Object Model
 * --------------------
 * History object
 */ 
 
history.go(-1); 
history.go(1); 
history.go(2); 

history.go("wrox.com");
history.got("nczonline.net"); 

history.back(); 
history.forward(); 

if(history.length==0){
	//this is the first page the user has visited
}

