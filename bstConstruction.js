class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      // Write your code here.
      let currentNode = this;
  
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = new BST(value)
            break
          } else {
            currentNode = currentNode.left
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = new BST(value)
            break
          } else {
            currentNode = currentNode.right
          }
        }
      }
      // Do not edit the return statement of this method.
      return this;
    }
  
    contains(value) {
      // Write your code here.
      let currentNode = this;
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else {
          return true
        }
      }
      return false
    }
  
    getMinValue() {
      let current = this;
      if (!current) return null
  
      while (current.left) {
        current = current.left
      }
      return current.value
    }
  
    remove(value, parent=null) {
      // Write your code here.
      let currentNode = this;
  
      while(currentNode) {
        if (value < currentNode.value) {
          parent = currentNode
          currentNode = currentNode.left
        } else if (value > currentNode.value) {
          parent = currentNode
          currentNode = currentNode.right;
        } else {
          if (currentNode.left && currentNode.right) {
            currentNode.value = currentNode.right.getMinValue();
            currentNode.right.remove(currentNode.value, currentNode)
          } else if (!parent) {
            if (currentNode.left) {
              currentNode.value = currentNode.left.value
              currentNode.right  = currentNode.left.right
              currentNode.left = currentNode.left.left
            } else if (currentNode.right) {
              currentNode.value = currentNode.right.value
              currentNode.left = currentNode.right.left
              currentNode.right = currentNode.right.right
            } else {
              
            }
          } else if (parent.left === currentNode) {
            parent.left = currentNode.left !== null ? currentNode.left : currentNode.right
          } else if (parent.right === currentNode) {
            parent.right = currentNode.left !== null ? currentNode.left : currentNode.right
          }
          break
        } 
      }
      // Do not edit the return statement of this method.
      return this;
    }
  }