// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2,
// otherwise, you have to subtract 1 from it.

const numberOfSteps = (num) => {
    let steps = 0;
    if (num === 0) return steps

    if (num % 2 === 0) {
        steps += 1;
        num = num / 2;
        steps += numberOfSteps(num)
    }
    else {
        steps += 1;
        num = num - 1;
        steps += numberOfSteps(num)
    }

    return steps

};