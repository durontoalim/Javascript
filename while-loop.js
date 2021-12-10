// var i= 0

// while (i<10) {
//     console.log('utin')

//     i++
// }

//

var isRuning = true

while(isRuning){
    var num = Math.floor(Math.random() * 10 + 1 )

    if (num === 9){
        console.log(' Winer winer chicken dinner')

        isRuning = false
    } else {
        console.log('You have got ' + num )
    }

}