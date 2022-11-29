//Give array of integers and target -> Return the 2 indexs of numbers that add up to target
//Only one solution is possible

const twoSum = (nums, target) => {
    let result = [];
    nums.forEach((num, idx) => {
        for (let i = idx + 1; i < nums.length; i++) {
            if (num + nums[i] === target) {
                result.push(idx);
                result.push(i);
                break;
            }
        }
    });

    return result;
};
