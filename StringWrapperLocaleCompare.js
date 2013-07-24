/**
 * String wrapper
 * ------------------
 * localeCompare()
 */ 


var strVal = "yellow"; 
console.log(strVal.localeCompare("brick")); 
console.log(strVal.localeCompare("yellow")); 
console.log(strVal.localeCompare("zoo")); 

// because values are implementation specific, it's safer to use localeCompare

function determineOrder(value){
	var result = strVal.localeCompare(value); 
	if(result < 0){ 
		console.log("The string 'yellow' comes before the string '" + value + "'."); 
	} else if (result > 0){ 
		console.log("The string 'yellow' comes after the string '" + value + "'.");
	} else { 
		console.log("The string 'yellow' is equal to the string '" + value + "'.");
	} 
}

determineOrder("brick"); 
determineOrder("yellow"); 
determineOrder("zoo"); 


console.log(String.fromCharCode(104,101,108,108,111)); //"hello"