var isPalindrome = function(x) {
    var a = x.toString()
    var arr = []
    for (var i = a.length - 1; i > 0; i--) {
        arr.push(a[i])
    }
    if (a[0] == '-') {
        return false
    }
    arr.push(a[0])
    let rearr = parseInt(arr.join(''))
    if (a == rearr) {
    	return true
    }else{
    	return false
    }
};

let x = 10

let c = isPalindrome(x)
console.log(c)