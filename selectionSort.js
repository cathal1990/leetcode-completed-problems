function selectionSort(array) {
    // Write your code here.
    
    for (let i=0; i<array.length; i++) {
      let index=i;
      for (let j=i+1; j<array.length; j++) {
        if (array[index] > array[j]) {
          index = j;
        }
      } 
      [array[i], array[index]] = [array[index], array[i]]
    }
      return array
  }