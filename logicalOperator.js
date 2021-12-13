// && -and // -or ! -not

// A && B
//true && true = true
//true && false = false
//false && false = false
//false && true = false

//A // B
// true // true = true 
//true // false = true
//false // true = true
//false // false = false

var a = 19
var b = 20
var c = 40
var d = 50

if (a>b && c > d){
    console.log("A is greater then B & C is greater then D");
} else {
    console.log('At least one condition false')
}

if (a > b || c > d){
    console.log("A is greater then B or C is greater then D");
} else {
    console.log('At least two condition are false');
}

// ! Not Operator

var nott = !(a> b)
console.log(nott);