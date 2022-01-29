// function simple(a,b, callback){
//     var c = a+b; // 15
//     var d = a-b; // 5
 
//     var result = callback(c,d);

//     console.log(result);
// }

// function clback(a,b){
//     return a+b;
// }

// var results = simple(10,5, clback)

// console.log(results);

//

function hello(x,y, fcb){
    var p = x+y;
    var q = x-y;

    var results = fcb(p,q)
    return results;
}
function cb(a,b){
    return a+b;
}
var result = hello(10,3, cb)

console.log(result);