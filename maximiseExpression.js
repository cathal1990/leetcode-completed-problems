function maximizeExpression(array) {
    if (array.length < 4) return 0
    let maxOfA = -Infinity;
    let maxOfAB = -Infinity;
    let maxOfABC = -Infinity;
    let maxOfABCD = -Infinity;
  
    for (let i = 0; i <array.length - 3; i ++) {
      maxOfA = Math.max(maxOfA, array[i])
      maxOfAB = Math.max(maxOfAB, maxOfA - array[i+1])
      maxOfABC = Math.max(maxOfABC, maxOfAB  + array[i+2])
      maxOfABCD = Math.max(maxOfABCD, maxOfABC - array[i+3])
    }
  
    return maxOfABCD
  }