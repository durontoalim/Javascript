var arr = [2, 9, 3, 4, 7]

// arr[0]
// arr[1]
// arr[2]

// arr[arr.length -1]

for(var i = 0; i < arr.length ; i++){
    console.log(arr[i])    //1 2 3 4 5

    arr[i] = arr[i] + 2; //[4, 11, 5, 4, 7]
}

console.log(arr)

// Jogfol array

var sum = 0

for(var i = 0; i <arr.length ; i++){
    sum += arr[i]
}

console.log(sum)

// Print even num
var ar = [2, 3, 5, 6]
for(var i = 0; i<ar.length; i++){
   if(ar[i]%2 === 0){
        console.log(ar[i])

    }
}
//odd num

for(var i = 0; i<ar.length; i++){
   if(ar[i]%2 === 1){
        console.log(ar[i])

    }
}