function moveElementToEnd(array, num) {
    // Write your code here.
    for (let i=0; i<array.length; i++) {
      if (array[i] !== num) {
        array.unshift(array.splice(i, 1)[0])
      }
    }
    return array
  }