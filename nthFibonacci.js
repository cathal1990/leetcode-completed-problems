function getNthFib(n) {
    // Write your code here.
    let f0 = 0;
    let f1 = 1;
    let temp;
    if (n === 1) return f0;
    if (n === 2) return f1;

    for (let i=3; i <= n; i ++) {
      temp = f0 + f1;
      f0 = f1;
      f1 = temp
    }
    return temp
  }