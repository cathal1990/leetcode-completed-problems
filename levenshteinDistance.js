function levenshteinDistance(str1, str2) {
    // Write your code here.
    const [small, big] = [str1, str2].sort((a,b) => a.length - b.length);
    let prevRow = Array.from(Array(small.length + 1).keys());
    let currRow = new Array(small.length + 1);
  
    for (let i=1; i<=big.length; i++) {
      currRow[0] = i;
  
      for (let j = 1; j<=small.length; j++) {
        if (big[i - 1] === small[j - 1]) {
          currRow[j] = prevRow[j - 1];
        }
        else {
          currRow[j] = Math.min(prevRow[j], prevRow[j-1], currRow[j-1]) + 1;
        }
      }
      [prevRow, currRow] = [currRow, prevRow]
    }
    return prevRow.pop()
  }