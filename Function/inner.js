// Inner JS
function something(great, name){
    function getFirstName(){
        if(name) {
            return name.split(' ')[0]
        } else{
            return ' '
        }
    }
    var message = great + ' ' + getFirstName()
    console.log(message);
}

something('Good', 'Utin')