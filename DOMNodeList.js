/**
 * DOM
 * ---
 * 
 * Node types
 * Node.ELEMENT_NODE(1)
 * Node.ATTRIBUTE_NODE(2)
 * Node.TEXT_NODE(3)
 * Node.CDATA_SECTION_NODE(4)
 * Node.ENTITY_REFERENCE_NODE(5)
 * Node.ENTITY_NODE(6)
 * Node.PROCESSING_INSTRUCTION_NODE(7)
 * Node.COMMENT_NODE(8)
 * Node.DOCUMENT_NODE(9)
 * Node.DOCUMENT_TYPE_NODE(10)
 * Node.DOCUMENT_FRAGMENT_NODE(11)
 * Node.NOTATION_NODE(12)
 */ 
 
// won't work in IE < 9
if (someNode.nodeType == Node.ELEMENT_NODE){
	console.log("Node is an element"); 
}

//works in all browsers
if (someNode.nodeType == 1){
	console.log("Node is an element"); 
}

/**
 * Nodes
 * -----
 * nodeName and nodeValue give specific information about the node
 * 
 * for elements, nodeName is always equal to the element's tage name and nodeValue is always null. 
 * 
 */ 
 
if (someNode.nodeType == 1) { 
	value = someNode.nodeName; 
}

/**
 * Nodes
 * -----
 * Each node has a childNode property containing a NodeList. A NodeList is an array-like object used to 
 * store an ordered list of nodes that are accessible by position. 
 */

var firstChild = someNode.childNodes[0]; 
var secondChild = someNode.childNodes.item(1); 
var count = someNode.childNodes.length; 

/**
 * Note:
 * -----
 * Possible to convert nodeList objects into arrays using Array.prototype.slice()
 */ 

// doesn't work in IE <= 8
var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes, 0); 

// must use manual iteration in IE <= 8
function convertToArray(nodes){
	var array = null; 
	try {
		array = Array.prototype.slice.call(nodes, 0); 
	} catch (ex) { 
		array = new Array(); 
		for (var i = 0; len = nodes.length; i < len; i++){ 
			array.push(nodes[i]); 
		}
	}
	return array
}
