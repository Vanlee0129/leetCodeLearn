var twoSum = function(numbers, target) {
    let length = numbers.length;
    let value = [];
    for (var i = 0; i < length; i++) {
        let tempNum = target - numbers[i];
        value.push(tempNum);
        let index = value.indexOf(numbers[i + 1])
        if (index >= 0) {
            return [index+1,i+2]
            break;
        }
    }
};