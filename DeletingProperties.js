/**
 * Note: 
 * ----
 * Enumerate through properties. Note each property can either be enumerable/non-enumberable
 */ 


var school = {schoolName:"Cornell", schoolAccredited: true, schoolLocation:"Ithaca"}

for (var eachItem in school){ 
	console.log(eachItem); 
}

/**
 * Note
 * ----
 * The educationLevel property isn't inherited, instead the educationLevel property is created 
 * as a new property on each object that uses the HigherLearning constructor. The reason the 
 * property is not inherited is the 'this' keyword
 */ 

function HigherLearning () { 
	this.educationLevel = "University"; 
}

var school = new HigherLearning(); 
school.schoolName = "Cornell"; 
school.schoolAccredited = true; 
school.schoolLocation = "Ithaca";; 

for (var eachItem in school) { 
	console.log(eachItem); 
}




/**
 * Note: 
 * ----
 * You cannot delete properties that were inherited not properties with their 
 * attributes set to configurable
 */ 


var christmasList = {mike:"Book", jason:"sweater"}; 
delete christmasList.mike; 

for (var people in christmasList) { 
	console.log(people); 
}


delete christmasList.toString; 
console.log("toString" in christmasList); 


var newSchool = new HigherLearning(); 
console.log(newSchool.educationLevel); 

HigherLearning.prototype.educationLevel2 = "Univeristy 2"; 

console.log(school.hasOwnProperty("educationLevel2")); 
console.log(school.educationLevel2); 

/**
 * Note
 * ----
 * cannot delete property that is inherited
 */ 

delete school.educationLevel2; 
console.log(school.educationLevel2); 

