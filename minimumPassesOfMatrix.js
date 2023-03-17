function minimumPassesOfMatrix(matrix) {
    let passes = 0;
    let queue = [];
debugger;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] > 0) queue.push([i,j])
        }
    }

    let queueLength = queue.length;

    for (idx = 0; idx < queue.length; idx++) {
        const i = queue[idx][0];
        const j = queue[idx][1];
        dfs(i,j+1, matrix, queue)
        dfs(i,j-1, matrix, queue)
        dfs(i+1,j, matrix, queue)
        dfs(i-1,j, matrix, queue)

        if (idx === queueLength - 1) {
            queueLength = queue.length
            passes++
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] < 0) return -1
        }
    }

    return passes - 1
}

function dfs(i, j, matrix, queue) {
    if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length || matrix[i][j] >= 0) return 
    queue.push([i,j])
    matrix[i][j] *= -1
}

const mat = [
    [0, -1, -3, 2, 0],
    [1, -2, -5, -1, -3],
    [3, 0, 0, -4, -1]
  ]

  console.log(minimumPassesOfMatrix(mat))