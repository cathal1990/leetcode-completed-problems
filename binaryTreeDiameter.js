function binaryTreeDiameter(tree) {
    // Write your code here.
    let diameter = { max: -Infinity }
    getDiameter(tree, diameter)
    return diameter.max;
  }
  
  function getDiameter(tree, diameter) {
    if (!tree) return 0
    const left = getDiameter(tree.left, diameter)
    const right = getDiameter(tree.right, diameter)
    diameter.max = Math.max(left + right, diameter.max)
  
    return Math.max(left + 1, right + 1)
  }