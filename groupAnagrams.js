function groupAnagrams(words) {
    // Write your code here.
    const anagrams = {};
  
    for (const word of words) {
      const sorted = word.split("").sort().join("");
      if (sorted in anagrams) {
        anagrams[sorted].push(word);
      } else {
        anagrams[sorted] = [word];
      }
      console.log(anagrams)
    }
    return Object.values(anagrams)
  }