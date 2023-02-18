function hasSingleCycle(array) {
    // Write your code here.
    let jumpTo = array.map((val, i) => ((i + val) % array.length) % array.length);
    let noPairs = jumpTo.every((position, i) => jumpTo[position] !== i);
    return (new Set(jumpTo)).size === jumpTo.length && noPairs
  }