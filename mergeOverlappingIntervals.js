function mergeOverlappingIntervals(array) {
    array.sort((a,b)=>a[0]-b[0])
    let res = [];
    
    for (let i=0; i< array.length; i++) {
      if (!res.length || res.at(-1)[1] < array[i][0]) {
        res.push(array[i])
      }
      else {
        if (res.at(-1)[1] >= array[i][0]) {
          res.at(-1)[1] = Math.max(res.at(-1)[1], array[i][1])
        }
      }
    }
    return res
  }