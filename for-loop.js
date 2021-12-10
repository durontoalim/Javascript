//For Loop

for (var i = 0; i <10; i++ ){
    console.log( (i+ 1) + ' Utin')
}

//For (initializar)

for (var i = 0; i <10; i++){
    if(i%2 === 1){
        console.log(i)
    }
}

// 0 + 1 = 1

var sum = 0

for ( var i = 0; i <= 10; i++){

    var result = sum + i
    console.log(sum + ' + ' + i + ' = ' + result )
}

// 1-100 even num jogfol
var eve = 0

for (i = 0; i<100 ; i++){
    if (i%2 === 0){
        console.log(eve + " + " + i + " = " + (eve+i))
    }
}