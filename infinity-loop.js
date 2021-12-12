// infinity loop

for( ; ; ){
    var rand = Math.floor(Math.random() * 10 + 1 )
    if( rand === 9){
        console.log('winer')
        break
    } else{
        console.log('try again. Your num ' + rand)
    }
}