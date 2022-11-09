function binarySearch(array, target) {
    // Write your code here.
    array.sort((a,b) => a-b)
    let leftP = 0;
    let rightP = array.length - 1;

    while (leftP <= rightP) {
      let middle = Math.floor((leftP + rightP) / 2)

      if (array[middle] === target) {
        return middle
      }
      else if (target < array[middle]) {
        rightP = middle - 1
      }
      else {
        leftP = middle + 1
      }
    }
    return -1
  }