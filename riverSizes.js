function riverSizes(matrix) {
    let arr = [];
  
    for (let i=0; i<matrix.length; i++) {
      for (let j=0; j<matrix[i].length; j++) {
        if (matrix[i][j]) arr.push(explore(i,j,0,matrix))
      }
    }
    return arr
  }
  
  function explore(i,j,size,matrix) {
    size++;
    matrix[i][j] = 0;
  
    if (matrix[i][j+1]) size = explore(i, j+1, size, matrix);
    if (matrix[i][j-1]) size = explore(i, j-1, size, matrix);
    if (matrix[i+1] && matrix[i+1][j]) size = explore(i+1, j, size, matrix);
    if (matrix[i-1] && matrix[i-1][j]) size = explore(i-1, j, size, matrix);
  
    return size
  }