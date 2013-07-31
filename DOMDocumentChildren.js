/**
 * DOM
 * ---
 * Document type
 *
 * Document nodes are represented via the Document type. In browsers the document object is an 
 * instance of HTMLDocument and represents the entire HTML page. The document object is a property
 * of window and is accessible globally. A document node has the following characteristics. 
 * 
 * nodeType is 9
 * nodeName is "#document".
 * nodeValue is null. 
 * parentNode is null.
 * ownerDocument is null
 * 
 */ 

 
/**
 * DOM
 * ---
 * Document children
 *
 * Children of a Document node can be a DocumentType, Element, ProcessingInstruction, or comment. 
 * There are two built in shortcuts to child nodes.
 * 
 * documentElement property: always points to the <html> element in an HTML page. The document
 * element is always represented in the childNodes list as well but the documentElement 
 * property give faster and more direct access. 
 */ 

/**
 * Example
 * -------
 * The document has only one child node, which is <html>. The element is accessible from 
 * both documentElement and childNodes list
 */
 
<html> 
  <body> 
 
  </body> 
</html> 

var html = document.documentElement; 
console.log(html === document.childNodes[0]); 
console.log(html === document.firstChild); 


/**
 * DOM
 * ---
 * document object: as an instance of HTMLDocument, the document object also has a body property
 * that points to the <body> element directly. document.body tends to be used quite frequently 
 * in javascript
 */ 

var body = document.body;  

/**
 * DOM
 * ---
 * documentType: Another possible child node of Document is a DocumentType. the <!DOCTYPE> tag is 
 * consider to be a separate entity from other parts of to the document. Because of inconsistent browser 
 * support for document.doctype, it is of limited usefulness
 */ 
var doctype = document.doctype


