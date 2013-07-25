/**
 * Inheritance
 * -----------------
 * Problems with prototype chaining appear when a reference object is 
 * in the prototype
 */ 
 
function SuperType(){
	this.colors = ["red", "blue", "green"];
}


function SubType(){}

//inherit from SuperType
SubType.prototype = new SuperType(); 


var i1 = new SubType(); 
i1.colors.push("black"); 
console.log(i1.colors); 

var i2 = new SubType();
console.log(i2.colors);			//red, blue, green, black, colors shared with all instances 

