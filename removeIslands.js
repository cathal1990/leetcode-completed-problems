function removeIslands(matrix) {
    // Write your code here.
    for (let i=0; i<matrix[0].length; i++) {
      traverseNeighbours(0,i, matrix)
      traverseNeighbours(matrix.length -1, i, matrix)
    }
  
    for (let j=0; j<matrix.length; j++) {
      traverseNeighbours(j, 0, matrix)
      traverseNeighbours(j, matrix[0].length -1, matrix)
    }
  
    for (let k=0; k<matrix.length; k++) {
      for (let m=0; m < matrix[0].length; m++) {
        const val = matrix[k][m];
  
        if (val == 1) matrix[k][m] = 0
        else if (val == 2) matrix[k][m] = 1
      }
    }
    return matrix
  }
  
  function traverseNeighbours(j, i, matrix) {
    console.log(matrix)
    const current = matrix[j][i]
  
    if (current == 1) {
      matrix[j][i] = 2;
  
      if (j+1 < matrix.length) traverseNeighbours(j+1, i, matrix)
      if (j-1 >= 0) traverseNeighbours(j-1, i, matrix)
      if (i+1 < matrix[0].length) traverseNeighbours(j, i+1, matrix)
      if (i-1 >= 0) traverseNeighbours(j, i-1, matrix)
    }
  }