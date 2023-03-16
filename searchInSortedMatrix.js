function searchInSortedMatrix(matrix, target) {
    let j = 0;
    let i = matrix[0].length - 1
  
    while (i >= 0 && j<matrix.length) {
      if (matrix[j][i] == target) return [j,i]
      matrix[j][i] < target ? j++ : i--
    }
    return [-1,-1]
  }