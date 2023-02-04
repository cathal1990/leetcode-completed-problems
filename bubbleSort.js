function bubbleSort(array) {
    // Write your code here.
    let count = array.length;
    while (count > 1) {
      for (let i=0; i < array.length; i++) {
        if (array[i] >= array[i+1]) {
          let temp = array[i];
          array[i] = array[i+1];
          array[i+1] = temp;
        }
      }
    count--
    }
    return array
  }