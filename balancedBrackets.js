function balancedBrackets(string) {
    // Write your code here.
    let brackets = {
      '[': null,
      '{': null,
      '(': null,
      '}': '{',
      ']': '[',
      ')': '(',
    }
  
    let stack = [];
    
    for (let char of string) {
      if (brackets[char] === null) {
        stack.push(char)
      }
      else if (brackets[char] && brackets[char] !== stack.pop()) return false
    }
  return (!stack.length) 
  }