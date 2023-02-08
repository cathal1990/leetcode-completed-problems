function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
    if (!array.length) return 0
  
    let prev = 0;
    let current = 0;
    
    for (let i=0; i<array.length; i++) {
      let temp = current;
      if (array[i] + prev > current ) {
        current = array[i] + prev
      }
      prev = temp
    }
    return current
  }