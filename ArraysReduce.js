/**
 * Note: 
 * -----
 * array reduce
 */ 

 
var arr = [1,2,3,4,5]; 

var arrSum = arr.reduce(function(prev, cur, index, array){return prev + cur; }); 
console.log(arrSum);

var arrMult = arr.reduce(function(prev,cur,index,array){ return prev * cur; }); 
console.log(arrMult); 

var arrStrs = ["a","b","c","d","e"]; 
var joinedStrs = arrStrs.reduce(function(prev,cur,index,array){return prev+cur; }); 
console.log(joinedStrs); 

var joinedReduceRight = arrStrs.reduceRight(function(prev,cur,index,array) { return prev + cur; }); 
console.log(joinedReduceRight); 


