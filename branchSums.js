function branchSums(root, sum=0, sums =[]) {
    // Write your code here.
    let currentSum = root.value + sum;
    
    if (!root.left && !root.right) {
      sums.push(currentSum)
    }
  
    if (root.left) {
      branchSums(root.left, currentSum, sums)
    }
    if (root.right) {
      branchSums(root.right, currentSum, sums)
    }
  
    return sums
  }