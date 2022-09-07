const thirdMax = (nums) => {
    nums.sort((a, b) => b - a);

    if (nums.length < 3) { return nums[0] }
    let count = 0;
    let answerArray = [];

    for (let i = 0; i < nums.length; i++) {
        if (count === 3) { break }

        if (!answerArray.includes(nums[i])) {
            answerArray.push(nums[i])
            count++
            }
    }

    return answerArray.length < 3 ? answerArray[0] : answerArray[2]
};

// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.



// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.