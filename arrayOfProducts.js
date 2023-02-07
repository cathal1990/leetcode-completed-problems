function arrayOfProducts(array) {
    // Write your code here.
    let result = [];
  
    for (let i=0; i<array.length; i++) {
      let sum = 1;
      for (let j=0; j<array.length; j++ ) {
        if (i == j) continue
        sum *= array[j]
      }
      result.push(sum)
    }
    return result
  }