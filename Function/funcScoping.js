var a = 'abc'
function nn(){
    var a = 'def'
    console.log(a);
    
    function yy(){
        var a = 20
        console.log(a)
    }
    yy()
}
nn()