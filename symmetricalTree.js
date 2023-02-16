function symmetricalTree(tree) {
    // Write your code here.
    return checkNodes(tree.left, tree.right)
  }
  
  function checkNodes(left, right) {
    if (!left || !right) return left == right
    if (left.value !== right.value) return false
  
    return checkNodes(left.left, right.right) && checkNodes(left.right, right.left)
  }