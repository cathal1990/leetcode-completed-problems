class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) {
      // Write your code here.
      const nodes = [this];
  
      while (nodes.length) {
        const current = nodes.shift();
        array.push(current.name);
        nodes.push(...current.children)
      }
      return array
    }
  }