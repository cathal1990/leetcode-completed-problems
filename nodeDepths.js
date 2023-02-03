function nodeDepths(root, sum = 0) {
    // Write your code here.
    if (!root) return 0 
  
    return sum + (nodeDepths(root.left, sum + 1) + nodeDepths(root.right, sum + 1))
    
  }