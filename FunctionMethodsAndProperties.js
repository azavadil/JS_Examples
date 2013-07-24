/**
 * Note: Fuctions
 * -----
 * Function properties and methods
 */ 

function sayName(name){  
	console.log(name); 
}

function sum(n1, n2){ 
	return n1 + n2; 
}

function sayHi(){ 
	console.log("Hi"); 
}

console.log(sayName.length); 
console.log(sum.length); 
console.log(sayHi.length); 

// apply method
function callSum(n1, n2){ 
	return sum.apply(this, arguments); 
}

function callSum2(n1, n2) { 
	return sum.apply(this, [n1, n2]); 
}

console.log(callSum(5,7)); 
console.log(callSum2(11,13)); 
console.log(sum(17,19)); 

function mult(n1, n2){ 
	return n1 * n2; 
}

// call method
function callMult(n1, n2){ 
	return mult.call(this, n1, n2); 
}
console.log(callMult(4,8)); 

window.color = "red"; 
var o = {color:"blue"}; 

function sayColor(){
	console.log(this.color); 
}

sayColor(); 

sayColor.call(this); 
sayColor.call(window); 
sayColor.call(o); 


// bind method

window.color = "white"; 
var p = {color : "silver"}; 

function sayColor2() { 
	console.log(this.color); 
}

var objSayColor = sayColor.bind(p); 
objSayColor(); 