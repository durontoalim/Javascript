// Two Diamention Array

var arr = [
    [70, 76, 78, 89, 66],
    [80, 90, 95, 85, 82],
    [81, 89, 90, 91, 96]
]

// console.log(arr[0])     // [70, 76, 78, 89, 66]
// cconsole.log(arr[1])

// console.log(arr[0][2])

for(var i = 0; i<arr.length; i++){
    for(var j = 0; j<arr[i].length; j++){
        console.log('Array ' + i + ': ' + arr[i][j])
    }
}