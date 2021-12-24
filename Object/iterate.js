var obj ={
    x: 40,
    y: 50,
    z: 60
}

console.log('x' in obj);

for(var i in obj){
    console.log(i);
    console.log(obj[i]);
}

//Obj Methods

var obj ={
    x: 40,
    y: 50,
    z: 60
}
console.log(Object.keys(obj));

console.log(Object.values(obj))

console.log(Object.entries(obj));

//Copy obj

var copyObj = Object.assign({}, obj);

console.log(copyObj);