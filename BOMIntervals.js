/**
 * Browser Object Model
 * --------------------
 * Intervals and timeouts
 * 
 * setTimeout() returns a numeric ID for the timeout. To cancel a pending timeout, use 
 * clearTimeout()
 */

//avoid
setTimeout("console.log('Hello')", 1000); 

//preferred
setTimeout(function(){ console.log("Hello"); }, 1000); 

// set the timeout
var timeoutID = setTimeout(function(){
	console.log("Hello"); 
	}, 1000); 
	
// cancel
clearTimeout(timeoutID); 

//avoid
setInterval("console.log('Hello')", 10000); 

//preferred
setInterval(function(){
	console.log("Hello");
	}, 10000); 
	
var num = 0; 
var max = 10; 
var intervalID = null; 

function incrementNumber(){
	num++;
	
	//cancel all pending executions when max is reached
	if(num == max){
		clearInterval(intervalID); 
		console.log("Done"); 
	}
}

intervalID = setInterval(incrementNumber, 500); 

var num = 0; 
var max = 10; 
var intervalID = null; 

function incrementNumber(){
	num++;
	
	//cancel all pending executions when max is reached
	if(num == max){
		setTimeout(incrementNumber, 500); 
	} else {
		console.log("Done"); 
	}
}

setTimeout(incrementNumber, 500); 

/**
 * Note
 * ----
 * This pattern is considered best practice for setting intervals without actually 
 * using intervals. True intervals are rarely used in production because we can't 
 * guarantee execution (tim between the end of one interval and the start of the next
 * is variable which may result in intervals being skipped
 */ 
