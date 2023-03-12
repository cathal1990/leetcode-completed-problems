class UnionFind {
    constructor() {
      // Write your code here.
      this.parents = {};
    }
  
    createSet(value) {
      // Write your code here.
      this.parents[value] = value;
    }
  
    find(value) {
      // Write your code here.
      if (!(value in this.parents)) return null;
  
      let currentParent = value;
      while(currentParent !== this.parents[currentParent]) {
        currentParent = this.parents[currentParent];
      }
      return currentParent
    }
  
    union(valueOne, valueTwo) {
      // Write your code here.
      if (!(valueOne in this.parents) || !(valueTwo in this.parents)) return;
  
      const valueOneRoot = this.find(valueOne);
      const valueTwoRoot = this.find(valueTwo);
      this.parents[valueTwoRoot] = valueOneRoot
    }
  }