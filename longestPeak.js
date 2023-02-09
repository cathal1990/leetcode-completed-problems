function longestPeak(array) {
    // Write your code here.
    let count = 0;
  
    for (let i=1; i<array.length-1; i++) {
      let current = array[i]
      let prev = array[i-1]
      let next = array[i+1]
      let isPeak = (current > prev && current > next)
  
      if (isPeak) {
        let left = i - 1;
        let right = i + 1;
        while (left >= 0 && array[left - 1] < array[left]) {
          left--
        }
        while (right < array.length && array[right+1] < array[right]) {
          right ++
        }
        let result = (right - left) + 1
        count = Math.max(result, count)
      }
    }
    return count
  }