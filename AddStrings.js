// Given two numbers as strings, return the sum of them without
// using built in methods to directly convert the strings to numbers.



const addStrings = (num1, num2) => {
    if (num2.length > num1.length) {
        [num1, num2] = [num2, num1];
    }

    let result = '';
    let carry = 0;
    let diff = num2.length - num1.length;


    for (let i = num1.length - 1; i >= 0; i--) {
        debugger
        let temp;
        if(num2[i + diff] === undefined) {
            temp = (Number(num1[i]) % 10) + carry;
        }
        else {
            temp = (Number(num1[i]) % 10) + (Number(num2[i + diff]) % 10) + carry;
        }

        if (temp >= 10) {
            result = (temp % 10) + result;
            carry = Math.floor(temp / 10)
        }
        else {
            result = temp + result
            carry = 0;
        }
    }
    if (carry) {
        result = carry + result;
    }
    return result

};

console.log(addStrings('45674657546745677', '4567465754'))
