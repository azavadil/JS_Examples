
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
