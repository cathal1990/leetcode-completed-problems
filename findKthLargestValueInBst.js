function findKthLargestValueInBst(tree, k) {
    // Write your code here.
    let values = [];
  
    searchTree(tree, values)
  
    return values.sort((a,b) => b-a)[k - 1];
  }
  
  function searchTree(tree, values) {
    if (!tree) return 
    values.push(tree.value)
    searchTree(tree.left, values)
    searchTree(tree.right, values)
  }