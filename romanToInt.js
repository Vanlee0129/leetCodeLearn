/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let o = {
        'I': 1,
        'IV': 4,
        'IX': 9,
        'V': 5,
        'X': 10,
        'XL': 40,
        'XC': 90,
        'L': 50,
        'C': 100,
        'CD': 400,
        'CM': 900,
        'D': 500,
        'M': 1000,
    }
    let arr = s.split('');
    let num = 0;
    for (var i = 0; i < arr.length; i++) {
        let num1 = o[arr[i] + arr[i + 1]]
        let num2 = o[arr[i]];
        if (typeof(num1) != "undefined") {
            num += num1;
            i++ //是两种字符情况就往前多移动一位，以免重复计算
        } else {
            num += num2;
        }
    }
    return num;
};

let s = 'IV'
// let r = romanToInt(s)
romanToInt(s)
// console.log(r)