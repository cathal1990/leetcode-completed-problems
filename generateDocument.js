// characters => 'abcdefg'
// document => 'def'
// Result => true

// document => 'dez'
// Result => false


function generateDocument(characters, document) {
    // Write your code here.
    let chars = characters.split('');
    if (document.length === 0) return true

    for (let i = 0; i < document.length; i++) {
      if (!chars.length) return false

      for (let j = 0; j < chars.length; j++) {
        if (document[i] === chars[j]) {
          chars.splice(j, 1);
          break;
        }
        if (j === chars.length -1) return false
      }
    }
    return true
  }