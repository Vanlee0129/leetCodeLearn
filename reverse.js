var reverse = function(x) {
    var a = x.toString()
    var arr = []
    for (var i = a.length - 1; i > 0; i--) {
        arr.push(a[i])
    }
    if (a[0] == '-') {
        arr.unshift('-')
    }
    arr.push(a[0])
    let rearr = parseInt(arr.join(''))
    if (rearr <= Math.pow(-2, 31) || rearr >= Math.pow(2, 31) - 1) {
        return 0;
    }
    return rearr
};

let x = 1534236469

let r = reverse(x)
console.log(r)