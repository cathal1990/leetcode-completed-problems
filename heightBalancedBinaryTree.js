function heightBalancedBinaryTree(tree) {
    // Write your code here.
    let balanced = { isBalanced: true };
    calcHeight(tree, 0, balanced)
    return balanced.isBalanced
    
  }
  
  function calcHeight(tree, height, balanced) {
    if (!tree) return height
  
    const left = calcHeight(tree.left, height + 1, balanced)
    const right = calcHeight(tree.right, height + 1, balanced)
  
    if (Math.abs(left - right) > 1) balanced.isBalanced = false
  
    return Math.max(left, right)
  }