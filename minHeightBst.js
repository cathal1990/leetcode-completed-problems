function minHeightBst(array, left=0, right=array.length-1) {
    // Write your code here.
    if (left > right) return null
    const mid = Math.floor((left + right) / 2);
    const bst = new BST(array[mid]);
    bst.left = minHeightBst(array, left, mid-1)
    bst.right = minHeightBst(array, mid+1, right)
    return bst
  }