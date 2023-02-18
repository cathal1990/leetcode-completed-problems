function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    // Write your code here.
    let map = {};
    let current = descendantOne;
  
    while (current) {
      map[current.name] = true;
      current = current.ancestor;
    }
  
    current = descendantTwo;
    while (current) {
      if (map[current.name]) return current
      current = current.ancestor
    }
  
    return false
  }