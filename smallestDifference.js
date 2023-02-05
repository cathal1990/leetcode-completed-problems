function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    let closestDifference = Infinity;
    let nums = [];
  
    for (let i=0; i<arrayOne.length; i++) {
      for (let j=0; j<arrayTwo.length; j++) {
        let diff = Math.abs(arrayOne[i] - arrayTwo[j]);
        if (diff < closestDifference) {
          closestDifference = diff;
          nums = [arrayOne[i], arrayTwo[j]];
        }
      }
    }
    return nums
  }