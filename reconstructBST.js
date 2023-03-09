class BST {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left) this.left.insert(value)
        else this.left = new BST(value)
      }
      else {
        if (this.right) this.right.insert(value)
        else this.right = new BST(value)
      }
    }
  }
  
  function reconstructBst(arr) {
    // Write your code here.
    const root = new BST(arr.shift())
    for (let num of arr) {
      root.insert(num)
    }
    return root
  }