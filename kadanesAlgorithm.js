function kadanesAlgorithm(array) {
    // Write your code here.
    let max = array[0]
    let sum = 0;
  
    for (let num of array) {
      if (sum < 0) sum = 0
      sum += num
      max = Math.max(max, sum)
    }
    return max
  }