function zeroSumSubarray(nums) {
  // Write your code here.
  let uniques = new Set();
  let count = 0;

  for (let i=0; i<nums.length; i++) {
    uniques.add(count)
    count += nums[i]

    if (uniques.has(count)) return true
  }
  return false;
}