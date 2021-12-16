// Search Data

var sarch = [1,2,3,4,5,6,7,4,455,5,10]

var find = 10
var isFound = false
for(var i = 0; i <sarch.length; i++){
    if( sarch[i] === find){
        console.log('Yes, Find Your Data' + i)
        isFound = true
        break;
    }
}
if(!isFound){
    console.log('No, Your Data Not found')
}