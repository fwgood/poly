var x1 = 'x^(-6)';
var x2 = '5x^(-6)';
var x3 = 'x^6';
var x4 = 'x';
var x5 = '5x^6';
var x6 = '5';
var reg3 = /[(x\^)]/;
var reg;
x1 = x1.split(reg3);
x2 = x2.split(reg3);
x3 = x3.split(reg3);
x4 = x4.split(reg3);
x5 = x5.split(reg3);
x6 = x6.split(reg3);

console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
console.log(x6);