function findSuccessor(currentNode, node) {
    // Write your code here.
    if (node.right) {
      node = node.right
      while (node.left) node = node.left
      return node
    } else {
      let prev = node;
      parent = node.parent
      while (parent) {
        if (parent.left === prev) {
          return parent
        } else {
          [prev, parent] = [parent, parent.parent]
        }
      }
    }
    return null
  }