var arr = [1,2,3,4,5]

var arr2 = [6,7,8,9]

// console.log(arr.join(' ~ ')); // 1 ~ 2 ~ 3 ~ 4 ~ 5

// arr.fill(true)
// console.log(arr)  //[ true, true, true, true, true ]

var arr3 = arr.concat(arr2)

console.log(arr3)  // [1,2,3,4,5,6,7,8,9] join array

console.log(Array.isArray(arr));  // True


// array copy
var arr5 = Array.from(arr)
console.log(arr5)