
//AlgoExpert - Two Number Sum

function twoNumberSum(array, targetSum) {
    // Write your code here.
    let results = [];
    for (let i=0; i < array.length; i++) {
      for (let j=i+1; j <array.length; j++ ) {
        if (array[i] + array[j] === targetSum) {
          results.push(array[i])
          results.push(array[j])
        }
      }
    }
    return results;
  }
