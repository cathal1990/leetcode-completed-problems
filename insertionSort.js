function insertionSort(array) {
    // Write your code here.
    for (let i=1; i<array.length; i++) {
      let j = i;
  
      while (j > 0 ) {
        if (array[j] < array[j-1]) {
          [array[j], array[j-1]] = [array[j-1], array[j]];
        }
        else {
          j--
        }
      }
    }
    return array
  }