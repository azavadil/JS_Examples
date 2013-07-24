/**
 * Note: 
 * ----
 * Two ways to create an instance of Object
 */ 

 
 // first way
 
 var person1 = new Object(); 
 person1.name = "Nicholas";
 person1.age = 29; 
 
 var person2 = {}; 
 person2.name = "Nick";
 person2.age = 45;
 
 /**
  * Note: Object literal notation
  * -----------------------------
  * object literal notation is the preferred approach
  */ 
 
 var person3 = { 
	name: "Nicholas", 
	age: 29
};

var person4 = { 
	"name": "Nicholas", 
	"age": 29, 
	5:true
};

console.log(person1); 
console.log(person2); 
console.log(person3); 
console.log(person4); 
