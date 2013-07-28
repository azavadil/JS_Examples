/**
 * DOM

 * ---
 * Document tree
 * 
 * Each node has a parentNode property pointing to its parent in the document tree. All nodes contained
 * within a childNodes list have the same parent, so each of their parentNode properties points to the 
 * same node. Additionally, each node within a childNode list is considered a sibling of the other nodes
 * in the same list. You can navigate from one node in the list to another using previousSibling and 
 * nextSibling. The first node in the list has null for the value of its previousSibling property, and the
 * last node has null for the value of its nextSibling property
 */ 

if (someNode.nextSibling == null){
	console.log("Last node in the parent's childNode list"); 
} else if (someNode.previousSibling == null){
	console.log("First node in the parent's childNodes list."); 
}


/**
 * Manipulating nodes
 * ------------------
 * appendChild() adds a node to the ned of the childNodes list. appendChild() returns the newly  
 * added node. 
 */ 

var returnedNode = someNode.appendChild(newNode); 
console.log(returnedNode == someNode.firstChild); 
console.log(returnedNode == someNode.lastChild); 

/**
 * Manipulating nodes 
 * ------------------
 * If the node passed to appendChild() is already part of the document, it is removed from its
 * previous location and placed at the new location. No DOM node may exist in more than one location 
 * in the document. If you call appendChild() and pass in the first child of a parent, it will end 
 * up as the last child. 
 */  

//assume multiple children for someNode
var returnedNode = someNode.appendChild(someNode.firstChild); 
console.log(returnedNode == someNode.firstChild); 
console.log(returnedNode == someNode.lastChild); 

/**
 * Manipulating nodes 
 * ------------------
 * To insert at a specific location insertBefore() can be used
 * 
 * @param1: the node to insert, becomes the previous sibling of the reference node
 * @param2: a reference node. 
 * return value: the node to insert
 */ 
 
//insert as last child
returnedNode = someNode.insertBefore(newNode, null); 
console.log(newNode == someNode.lastChild); 		//true

//insert as the new first child
returnedNode = someNode.insertBefore(newNode, someNode.firstChild); 
console.log(returnedNode == newNode); 
console.log(newNode == someNode.firstChild); 

//insert before last child
returnedNode = someNode.insertBefore(newNode, someNode.lastChild); 
console.log(newNode == someNode.childNodes(someNode.childNodes.length-2)); 


/**
 * Manipulating nodes
 * ------------------
 * replaceChild() accepts two arguments
 *
 * @param1: node to insert
 * @param2: node to replace
 * return value: the node that's being inserted
 */ 
 
//replace first child
var returnedNode = someNode.replaceChild(newNode, someNode.firstChild); 

//replace last child
returnedNode = someNode.replaceChild(newNode, someNode.lastChild); 

/**
 * Manipulating nodes
 * ------------------
 * removeChild()
 *
 * @param1: the node to remove
 * return value: the removed node
 */

//remove first child
var formerFirstChild = someNode.removeChild(someNode.firstChild); 

//remove last child
var formerLastChild = someNode.removeChild(someNode.lastChild); 































