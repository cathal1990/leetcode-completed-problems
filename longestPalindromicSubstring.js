function longestPalindromicSubstring(string) {
    // Write your code here.
    if (string.length < 2) return string
    let longest = "";
    
    for (let i=0; i<string.length; i++) {
      for (let j=i+1; j<string.length; j++) {
        const sub = string.slice(i, j+1)
        if (sub.length > longest.length && isPalindrome(sub)) {
          longest = sub;
        }
      }
    }
    return longest
  }
  
  function isPalindrome(string) {
    let left = 0;
    let right = string.length - left - 1;
  
    while (left < right) {
      if (string[left] !== string[right]) return false
      left++
      right --
    }
    return true
  }