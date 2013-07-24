/**
 * Note: Fuctions
 * -----
 * Function internals
 */ 

window.color = "red"; 

var o = {color:"blue"}; 

function sayColor(){
	console.log(this.color); 
}

sayColor(); 

o.sayColor = sayColor; 
o.sayColor = sayColor; 
o.sayColor(); 

function outer() { 
	inner(); 
}

function inner() { 
	console.log(inner.caller); 
}

outer(); 

function outer2() { 
	inner2(); 
}


function inner2() { 
	console.log(arguments.callee.caller); 
}

outer2(); 
