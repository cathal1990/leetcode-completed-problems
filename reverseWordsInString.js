function reverseWordsInString(string) {
    // Write your code here.
    let res = [];
    let curr = "";
    
    for (let i=0; i<string.length; i ++) {
      if (string[i] !== " ") {
        curr += string[i];
      } else if (string[i] === " ") {
        res.unshift(curr)
        res.unshift(string[i])
        curr = ""
      }
    }
    res.unshift(curr)
    return res.join("")
  }