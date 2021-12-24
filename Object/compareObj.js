// Compare Obj
var obj = {
    x: 10,
    y: 20,
    z: 30
}

var obj2 = {
    x: 11,
    y: 12,
    z: 30
}

console.log(obj === obj2);

// if else madddome Compare

if(obj.z === obj2.z){
    console.log("true");
} else {
    console.log('false');
}

//Json diye compare

console.log(JSON.stringify(obj)=== JSON.stringify(obj2));