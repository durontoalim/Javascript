function func1(){
    var a = 25
    return function func2(){
        console.log(a)
    }
}
var abc = func1()

console.dir(abc);