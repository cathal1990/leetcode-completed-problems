function getPermutations(array) {
    // Write your code here.
    if (array.length === 1) {
      return [array]
    }
    let perms = [];
    for (let i=0; i<array.length; i++) {
      let subArray = [...array.slice(0,i), ...array.slice(i+1)];
      let subPerm = getPermutations(subArray);
      for (let j=0; j<subPerm.length; j++) {
        perms.push([array[i], ...subPerm[j]])
      }
    }
    return perms
  }