function spiralTraverse(array) {
    // Write your code here.
    let direction = "right"
    let output = [];
  
    if (array.length === 1) return array[0]
  
    while (array.length) {
      if (direction === "right" && array.length) {
        if (!array[0].length) return output
        output = [...output, ...array.shift()]
        direction = "down";
      }
      if (direction === "down" && array.length) {
        if (!array[0].length) return output
        let digits = [];
        array.forEach((arr) => digits.push(arr.pop()))
        output = [...output, ...digits]
        direction = "left"
      }
      if (direction === "left" && array.length) {
        if (!array[0].length) return output
        let digits = array.pop().reverse()
        output = [...output, ...digits]
        direction = "up"
      }
      if (direction === "up" && array.length) {
        if (!array[0].length) return output
        let digits = [];
        array.forEach((arr) => digits.push(arr.shift()))
        output = [...output, ...digits.reverse()]
        direction = "right"
      }
    }
    return output
  }