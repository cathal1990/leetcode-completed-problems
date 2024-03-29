class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
      // Write your code here.
      if (!this.head) {
        this.head = node
        this.tail = node
        return
      }
      this.insertBefore(this.head, node)
    }
  
    setTail(node) {
      if (!this.tail) {
        this.setHead(node)
        return 
      }
      this.insertAfter(this.tail, node)
    }
  
    insertBefore(node, nodeToInsert) {
      if (nodeToInsert === this.head && nodeToInsert === this.tail) {
        return 
      }

      this.remove(nodeToInsert)
      nodeToInsert.prev = node.prev
      nodeToInsert.next = node

      if (!node.prev) this.head = nodeToInsert
      else node.prev.next = nodeToInsert

      node.prev = nodeToInsert
    }
  
    insertAfter(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) {
            return 
          }
    
          this.remove(nodeToInsert)
          nodeToInsert.prev = node
          nodeToInsert.next = node.next
    
          if (!node.next) this.tail = nodeToInsert
          else node.next.prev = nodeToInsert
    
          node.next = nodeToInsert
    }
  
    insertAtPosition(position, nodeToInsert) {
      if (position === 1) {
        this.setHead(nodeToInsert)
        return
      }
      let node = this.head
      let currentPosition = 1

      while (node && currentPosition !== position) {
        node = node.next
        currentPosition += 1
      }

      if (node) {
        this.insertBefore(node, nodeToInsert)
      }
      else {
        this.setTail(nodeToInsert)
      }
    }
  
    removeNodesWithValue(value) {
      let node = this.head;

      while (node) {
        let nodeToRemove = node;
        node = node.next
        if (nodeToRemove.value === value) {
            this.remove(nodeToRemove)
        }
      }

    }
  
    remove(node) {
      if (node === this.head) this.head = this.head.next
      if (node === this.tail) this.tail = this.tail.prev

      this.removeNodeBindings(node)
    }

    removeNodeBindings(node) {
        if (node.prev) node.prev.next = node.next
        if (node.next) node.next.prev = node.prev
        node.prev = null
        node.next = null
    }
  
    containsNodeWithValue(value) {
      let node = this.head

      while (node) {
        if (node.value !== value) {
            node = node.next
        }
        else {
            return true
        }
      }
      return false
    }
  }