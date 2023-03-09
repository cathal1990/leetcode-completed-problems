function minimumCharactersForWords(words) {
    let minLetters = {};
    for (let word of words) {
      const tempLetters = {};
      for (let char of word) {
        tempLetters[char] ? tempLetters[char]++ : tempLetters[char] = 1
        if (!minLetters[char]) minLetters[char] = tempLetters[char]
        else minLetters[char] > tempLetters[char] ? null : minLetters[char] = tempLetters[char]
      }
    }
    return Object.entries(minLetters).reduce((acc, [key, value]) => {
      return acc.concat(Array(value).fill(key))
    }, [])
  }