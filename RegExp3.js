/**
 * Note: Regular expressions 
 * -----
 * @param g: global, pattern applied to all of string instead of stopping after first match 
 * @param i: case insensitive
 * @param m: multiline mode
 *
 * var expression = /pattern/flags;
 */ 

 
 
var t1 = "cat, bat, sat, fat"; 
var pat1 = /.at/; 

var m1 = pat1.exec(t1); 
console.log(m1.index); 
console.log(m1[0]); 
console.log(pat1.lastIndex); 

m1 = pat1.exec(t1); 
console.log(m1.index); 
console.log(m1[0]); 
console.log(pat1.lastIndex); 

var pat2 = /.at/g; 

var m2 = pat2.exec(t1); 

console.log(m2.index); 
console.log(m2[0]); 
console.log(pat2.lastIndex); 

m2 = pat2.exec(t1); 
console.log(m2.index); 
console.log(m2[0]); 
console.log(pat2.lastIndex); 