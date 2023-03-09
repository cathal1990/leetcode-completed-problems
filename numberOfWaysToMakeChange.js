function numberOfWaysToMakeChange(n, denoms) {
    const ways = [1,...new Array(n).fill(0,0,n)]
  
    for (const denom of denoms) {
      for (let i = denom; i < n+1; i++) {
        if (denom <= i) ways[i] += ways[i - denom] 
      }
    }
    return ways.at(-1)
  }