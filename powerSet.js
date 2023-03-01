function powerset(array, res=[[]], idx = 0) {
    // Write your code here.
    if (idx === array.length) return res
    let length = res.length
  
    for (let i=0; i< length; i++) {
      let currentSet = res[i]
      res.push(currentSet.concat(array[idx]))
    }
    return powerset(array, res, idx+1)
  }