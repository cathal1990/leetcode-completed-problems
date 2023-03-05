function threeNumberSort(array, order) {
    // Write your code here.
    let idx = 0;
  
    for (let i=0; i<order.length; i++) {
      for (let j=idx; j<array.length; j++) {
        if (array[j] === order[i]) {
          swap(idx, j, array)
          idx++
        }
      }
    }
    return array
  }
  
  function swap(i1, i2, array) {
    [array[i1], array[i2]] = [array[i2], array[i1]]
  }