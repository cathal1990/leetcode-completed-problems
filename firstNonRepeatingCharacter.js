// Counts number of times each char appears in input string
// Returns index of first char that has no repeats or -1 if none

function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let counts = {};

    for (let i=0; i < string.length; i++) {
      counts[string[i]] ? counts[string[i]] += 1 : counts[string[i]] = 1
    }

    for (let key in counts) {
      if (counts[key] === 1) return string.indexOf(key)
    }
    return -1;
  }