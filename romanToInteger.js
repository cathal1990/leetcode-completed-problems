const romanToInt = (str) => {
    const symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let result = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'I' && str[i+1] === 'V') {result += 4; i++; continue}
        if (str[i] === 'I' && str[i+1] === 'X') {result += 9; i++; continue}
        if (str[i] === 'X' && str[i+1] === 'L') {result += 40; i++; continue}
        if (str[i] === 'X' && str[i+1] === 'C') {result += 90; i++; continue}
        if (str[i] === 'C' && str[i+1] === 'D') {result += 400; i++; continue}
        if (str[i] === 'C' && str[i+1] === 'M') {result += 900; i++; continue}

        result += symbols[str[i]]
    }

    return result
}


console.log(romanToInt('IV'))