var a = 10;
var b = 20;
 
console.log("Before swap");
console.log("A is", a);
console.log("B is", b);

[a, b] = [b, a];

console.log("After swap");
console.log("A is", a);
console.log("B is", b);

