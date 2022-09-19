function canConstruct(text, letterBank) {
    let dict = {};

    for (let i = 0; i < letterBank.length; i++) {
        dict[letterBank[i]] ? dict[letterBank[i]] += 1 : dict[letterBank[i]] = 1
    }

    for (let i = 0; i < text.length; i++) {
        if (!dict[text[i]] || dict[text[i]] === 0) {
            return false
        }
        else {
            dict[text[i]] -= 1;
        }
    }
    return true;
};


console.log(canConstruct('aab', 'baa'))