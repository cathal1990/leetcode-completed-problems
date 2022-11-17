

function findThreeLargestNumbers(array) {
    // Write your code here.
    let result = [-Infinity, -Infinity, -Infinity];
    let resultIndex = 2;

    while (resultIndex >= 0) {
      for (let i=0; i < array.length; i++) {
        if (array[i] > result[resultIndex]) {
          result[resultIndex] = array[i]
        }
      }
        array.splice(array.indexOf(result[resultIndex]), 1)
        resultIndex--;
    }
    return result
  }

