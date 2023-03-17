function sameBsts(arrayOne, arrayTwo) {
    const [rootOne, ...restOne] = arrayOne;
    const [rootTwo, ...restTwo] = arrayTwo;

    if (!arrayOne.length) return true
    if (rootOne !== rootTwo) return false
    if (restOne.length !== restTwo.length) return false

    const leftTreeOne = restOne.filter(n => n < rootOne)
    const leftTreeTwo = restTwo.filter(n => n < rootOne)

    const rightTreeOne = restOne.filter(n => n >= rootOne)
    const rightTreeTwo = restTwo.filter(n => n >= rootOne)

    return sameBsts(leftTreeOne, leftTreeTwo) && sameBsts(rightTreeOne, rightTreeTwo)
  }