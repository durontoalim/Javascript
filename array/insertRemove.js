//Insert Remove Element
var arr = [1,2,3,4,5,6,7,8,9]

// Insert 3 to 9

arr.splice(3,0,9,10) // (add entry cel, remove - na korle 0, je songkha add krbo )

arr.splice(3, 1)      // (remove cell, koyta remove krbo tar num)


//arr[3] = 9    	//3 num e 9 bosbe
//arr.push(9)       // last e 9 entry hbe
//arr.unshift(9)    // first e 9 enrty hbe


//Remove

// arr.pop()   //last array remove
//arr.shift()  // first array remove


console.log(arr);