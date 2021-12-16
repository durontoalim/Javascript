var arr = [1, 2, 3, 4, 5]

// arr[0]
// arr[1]
// arr[2]

// arr[arr.length -1]

for(var i = 0; i < arr.length ; i++){
    // console.log(arr[i])    //1 2 3 4 5

    arr[i] = arr[i] + 2;
}

console.log(arr);
