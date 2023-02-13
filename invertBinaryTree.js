function invertBinaryTree(tree) {
    // Write your code here.
    if (!tree) return
    let currentNode = tree;
    let left = currentNode.left
    let right = currentNode.right
  
    let temp = left
    currentNode.left = right;
    currentNode.right = temp;
  
    if (left) invertBinaryTree(left)
    if (right) invertBinaryTree(right)
  
    return tree
  }