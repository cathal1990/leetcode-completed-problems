function semordnilap(words) {
    // Write your code here.
    let array = [];
    
    for (let i=0; i<words.length; i++) {
      let reversed = words[i].split('').reverse().join('');
      for (let j=i+1; j<words.length; j++ ) {
        if (reversed === words[j]) {
          array.push([words[i], words[j]])
        }
      }
    }
  return array
  }