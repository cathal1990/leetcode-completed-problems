// string = 'abc'
// key = 3
// returns 'def'


function caesarCipherEncryptor(string, key) {
    // Write your code here.
    let charArray = string.split('')

    return charArray.map((char) => {
      const charNum = char.charCodeAt() - 96
      if (key > 26) key = key % 26

      if (charNum + key > 26) {
        return String.fromCharCode((charNum + key - 26) + 96)
      }

      return String.fromCharCode((charNum + key) + 96)
    }).join('')
  }