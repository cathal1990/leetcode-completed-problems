function nextGreaterElement(array) {
    // Write your code here.
    return array.map((val, i) => {
      let stack = array.slice(i).concat(array.slice(0,i))
      while (stack[0] <= val) {
        stack.shift()
      }
      return stack[0] ?? -1
    })
  }