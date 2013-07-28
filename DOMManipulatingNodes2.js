/**
 * DOM
 * ---
 * Manipulating nodes
 * 
 * cloneNode() creates an exact clone of the node on which it's called
 * 
 * @param1: Boolean indicated whether to do a deep copy
 * return value: the cloned node. 
 * 
 * The cloned node is owned by the document but has no parent node assigned. As such the cloned 
 * node is an orphan and doesn't exist in the document until added via appendChild(), insertBefore()
 * or replaceChild()
 */ 

<ul> 
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul> 

//assume the ul is stored in a variable named myList
var deepList = myList.cloneNode(true); 
console.log(deepList.childNodes.length); 

var shallowList = myList.cloneNode(false); 
console.log(shallowList.childNodes.length); 

 
 