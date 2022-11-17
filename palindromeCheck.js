function isPalindrome(string) {
    // Write your code here.
    if (string.length === 1) return true

    return string === string.split('').reverse().join('')
  }