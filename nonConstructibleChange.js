function nonConstructibleChange(coins) {
    // Write your code here.
    if (!coins.length) return 1

    let change = 0;

    coins.sort((a, b) => a-b)

    for (let i=0; i < coins.length; i++) {
      if (coins[i] > change + 1) return change + 1
      change += coins[i]
      console.log(change)
    }
    return change + 1
  }