function threeNumberSum(array, target) {
  // Write your code here.
  let returnArray  = [];
  array = array.sort((a,b) => a-b)
  for (let i=0; i<array.length; i++) {
    let start = i + 1;
    let end = array.length - 1;

    if (array[i] > target) break;

    while (start < end) {
      const sum = array[i] + array[start] + array[end];

      if (sum === target) {
        returnArray.push([array[i], array[start], array[end]])
        start ++;
        end --;
      }
      else if (sum < target) {
        start++ 
      }
      else {
        end--
      }
    }
  }
return returnArray 
}