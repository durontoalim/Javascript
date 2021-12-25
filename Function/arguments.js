// Arguments JS
function test(a,b,c){
    console.log(arguments);
}

test()
test (1,2,3)

// Function Test

function test2(a,b,c){
    for(var i = 0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}
test2(1,2,3)

//Return JS
function returns() {
    console.log("Hello Return JS");
    return 0;
}
returns()


//Expression

var fun = function funcc(){
    console.log("function in the variable")
}

fun()