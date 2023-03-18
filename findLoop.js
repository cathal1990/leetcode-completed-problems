class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function findLoop(head) {
    let node = head;
    let nodeSet = new Set();
  
    while (node) {
      if (nodeSet.has(node)) return node;
      
      nodeSet.add(node);
      node = node.next
    }
  }