/**
 * Note: 
 * -----
 * reording arrays
 */ 

var vals = [1,2,3,4,5,6]; 

console.log(vals); 
vals.reverse(); 
console.log(vals);  
 

var vals2 = [0,1,5,10,15];

console.log(vals2); 
vals2.sort(); 

/**
 * Note: 
 * -----
 * sort converts the values to strings and then does the comparison, so vals2.sorts() generates the list 
 * [0, 1, 10, 15, 5], not what we want.
 * 
 * to get the sort we want we pass a comparison function. 
 */ 
console.log(vals2);  


function cmp(v1, v2){
	if(v1< v2) return -1; 
	else if (v1 > v2) return 1; 
	else return 0; 
}

vals2.sort(cmp)
console.log(vals2); 

function cmp2(v1, v2){ 
	return v1-v2; 
}

vals2.sort(cmp2); 
console.log(vals2); 

function revCmp(v1, v2) {
	return v2-v1; 
}

vals2.sort(revCmp); 
console.log(vals2); 

