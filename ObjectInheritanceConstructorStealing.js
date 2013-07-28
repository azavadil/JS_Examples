/**
 * Inheritance
 * -----------------
 * Constructor stealing
 * 
 * call the supertype constructor from within the subtype constructor. Functions are 
 * simply objects that execute code in a particular context, apply() and call() can be used
 * to execute a constructor on the newly created object. 
 */ 
 
function SuperType(){
	this.colors = ["red", "blue", "green"];
}

function SubType(){
	//inherit from Supertype
	SuperType.call(this); 
}



var i1 = new SubType(); 
i1.colors.push("black"); 
console.log(i1.colors); 

var i2 = new SubType();
console.log(i2.colors); 

/**
 * Inheritance
 * -----------------
 * Constructor stealing also enables the client to pass arguments into 
 * the supertype constructor
 */
 
function SuperType2(name){
	this.name = name; 
}

function SubType2(){
	//inherit from SuperType passing in an argument
	SuperType2.call(this, "Cage"); 
	
	//instance property
	this.age = 29; 
}

var i = new SubType2(); 
console.log(i.name); 
console.log(i.age); 