// eg 'AAA' => '3A'
// eg 'AABBCCBF' => '2A2B2C1B1F'

// If over 9 then split to single
// eg 'AAAAAAAAAAAA' => '9A3A'

//Optimized version

function runLengthEncoding(string) {
    let count = 1;
    let result = '';

    string.split('')
        .forEach((char, i) => {
            if (char === string[i + 1] && count < 9) {
                count++;
            }
            else {
                result += `${count}${string[i]}`
                count = 1;
            }
        })
        return result
}


// function runLengthEncoding(string) {
//     // Write your code here.
//     let count = 1;
//     let result = '';

//     for (let i=0; i < string.length; i++) {
//       if (i === string.length - 1) {
//         if (string[i] === string[i-1]) {
//           if (count < 10) {
//           result += `${count}${string[i]}`
//           count = 1
//         }
//         else {
//           while (count >= 10) {
//             result += `9${string[i]}`
//             count -= 9
//           }
//           result += `${count}${string[i]}`
//           count = 1;
//         }
//           break;
//         }
//         else {
//           result += `1${string[i]}`
//           break;
//         }
//       }
//       if (string[i] === string[i+1]) {
//         count++;
//         continue;
//       }
//       else {
//         if (count < 10) {
//           result += `${count}${string[i]}`
//           count = 1
//         }
//         else {
//           while (count >= 10) {
//             result += `9${string[i]}`
//             count -= 9
//           }
//           result += `${count}${string[i]}`
//           count = 1;
//         }
//       }
//     }

//     return result
//   }