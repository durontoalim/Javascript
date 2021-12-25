function add (a,b) {
    return a+b;
}

function multiTimes(a,b, func){
    var c = a+b
    var d = a-b

    function multiFunc(){
        var x = func (a,b)
        return c*d*x
    }
    return multiFunc
}
var multiFunc = multiTimes(2,3, add)

console.log(multiFunc());