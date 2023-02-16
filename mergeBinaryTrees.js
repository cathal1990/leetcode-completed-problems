function mergeBinaryTrees(tree1, tree2) {
    if (!tree1 && !tree2) return null
    if (!tree2) return tree1
    if (!tree1) return tree2
    const sum = tree1.value + tree2.value
    const newTree = new BinaryTree(sum)
    newTree.left = mergeBinaryTrees(tree1.left, tree2.left)
    newTree.right = mergeBinaryTrees(tree1.right, tree2.right)
  
    return newTree
  }