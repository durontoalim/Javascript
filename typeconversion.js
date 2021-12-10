var str = "1000"
var tcon = 10

console.log(str * 10);  // 10000 - typeconversion er jnno gon hoyeche

console.log(str + 10); //100010 typeconversion e jog hoy na eta pashapashi rakhbe

console.log(Number.parseInt(str)); // number to Integer
console.log(tcon.toString()); // number to String

console.log(String(-Infinity))  // convert String
console.log(Boolean(-Infinity))  // true 

//Falsy Value

''
0
null
undefined
NaN

console.log(Boolean(''));
console.log(Boolean('Hello'));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(55));

console.log(true);  //number
var x = true
console.log(x.toString());  //number to string convert