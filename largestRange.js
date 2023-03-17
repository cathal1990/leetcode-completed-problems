function largestRange(array) {
    let longest = Number.MIN_SAFE_INTEGER;
    let result = [];

    array.sort((a,b) => a -b)

    for (let i=0; i< array.length; i++) {
        let start = i;
        while (array[i] + 1 === array[i+1] || array[i] === array[i+1]) {
            i++
        }

        if (longest < array[i] - array[start]) {
            result = [array[start], array[i]];
            longest = array[i] - array[start]
        }
    }
    return result
  }