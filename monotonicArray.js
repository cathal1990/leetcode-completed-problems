function isMonotonic(array) {
    // Write your code here.
    if (!array.length || array.length === 1 || array.length === 2) return true
  
    for (let i=1; i<array.length; i++) {
      if (array[i] < array[i-1] && array[0] > 0) return false
      if (array[i] > array[i-1] && array[0] < 0) return false
    }
    return true
  }