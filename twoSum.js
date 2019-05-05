var twoSum = function(nums, target) {
 let length = nums.length;
    let value = [];
    for (var i = 0; i < length; i++) {
        let tempNum = target - nums[i];
        value.push(tempNum);
        let index = value.indexOf(nums[i + 1])
        if (index >= 0) {
            return [index, i + 1]
            break;
        }
    }
};
