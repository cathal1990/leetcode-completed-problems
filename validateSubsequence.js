//AlgoExpert ValidateSubsequence

function isValidSubsequence(array, sequence) {
    // Write your code here.
    let seqIndex = 0;

    for (let i in array) {
      if (array[i] === sequence[seqIndex]) {
        seqIndex++
      }
      if (seqIndex === sequence.length) {
        return true
      }
    }
    return false
  }