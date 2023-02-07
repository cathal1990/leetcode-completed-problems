function firstDuplicateValue(array) {
    // Write your code here.
    let closestIndexDistance = Infinity;
    let closestIndex = Infinity;
    let currentAnswer = null;
    let currentindexDistance = null;
  
    for (let i=0; i< array.length; i++) {
      for (let j=i+1; j<array.length; j++) {
        if (array[i] === array[j]) {
          currentindexDistance = (j - i) 
        }
        else { continue }
        if (currentindexDistance < closestIndexDistance && j < closestIndex) {
          closestIndexDistance =  currentindexDistance
          currentAnswer = array[i]
          closestIndex = j;
        }
      }
    }
  
    if (closestIndexDistance === Infinity) return -1
    return currentAnswer
  }