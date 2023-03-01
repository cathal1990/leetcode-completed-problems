function phoneNumberMnemonics(phoneNumber, mnemonic = "", mnemonics=[], index = 0) {
    // Write your code here.
    const buttons = {
      "0": ["0"],
      "1": ["1"],
      "2": ["a", "b", "c"],
      "3": ["d", "e", "f"],
      "4": ["g", "h", "i"],
      "5": ["j", "k", "l"],
      "6": ["m", "n", "o"],
      "7": ["p", "q", "r", "s"],
      "8": ["t", "u", "v"],
      "9": ["w", "x", "y", "z"],
    }
    
    if (index > phoneNumber.length - 1) {
      mnemonics.push(mnemonic)
      return mnemonics
    }
  
    for (let char of buttons[phoneNumber[index]]) {
      phoneNumberMnemonics(phoneNumber, mnemonic+char, mnemonics, index+1)
    }
    
    return mnemonics
  }