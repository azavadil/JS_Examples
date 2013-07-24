/**
 * Note: 
 * -----
 * array iterative methods
 */ 

 
 

var nums = [1,2,3,4,5,6,7,8,9,10]; 


var odds = nums.filter(function(item,index,array) { return item%2 != 0; } ); 
console.log(odds); 

var GT2 = nums.filter(function(item,index,array){ return item>2;}); 
console.log(GT2); 

// tests whether the predicate holds for every element
var allAreGT2 = nums.every(function(item,index,array) { return item > 2;}); 
console.log(allAreGT2); 

// tests whether the predicate holds for any element
var someAreGT2 = nums.some(function(item, index,array) { return item > 2; }); 
console.log(someAreGT2); 

// map
var doubles = nums.map(function(item,index,array) { return item*2; }); 
console.log(doubles); 

// foreach, we can use to mutate the array
nums.forEach(function(item,index,array) { array[index] = item*3; }); 
console.log(nums); 