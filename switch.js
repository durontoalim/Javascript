var date = new Date ()
console.log(date);

// 0 - sunday, 1 - Monday, 2 - Thusday

var today = date.getDay()

switch(2) {
    case 0:
        console.log('Today id Sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today Is wednesday')
        break
    case 4:
        console.log('Today Is Thursday')
        break
    case 5:
        console.log('Today is Friday')
        break
    case 6:
        console.log('Today is Saturday')
        break
    default:
        console.log('Not a valid Number')
           
}