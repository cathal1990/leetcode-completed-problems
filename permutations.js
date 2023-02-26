function getPermutations(array, perm = [], perms = []) {
    // Write your code here.
    if (!array.length && perm.length) perms.push(perm)
    
    for (let i=0; i<array.length; i++) {
      let newArray = array.filter((x, idx) => idx !== i);
      let newPerm = perm.concat(array[i]);
      getPermutations(newArray, newPerm, perms)
    }
    return perms
  }