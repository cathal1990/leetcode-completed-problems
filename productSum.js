//Takes in "special" array and returns its product sum
//A "special" array is a non-empty array that contains either integers or other "special" arrays.
//The product sum of a "special" array is the sum of its elements, where "special" arrays inside it are summed themselves and then multiplied by their level of depth.
//The depth of a "special" array is how far nested it is. For instance, the depth of [] is 1; the depth of the inner array in [[]] is 2; the depth of the innermost array in [[[]]] is 3

function productSum(array, depth=1) {
    // Write your code here.
    const result = array.reduce((acc, el) => {
      if (Array.isArray(el)) return acc + productSum(el, depth+1)
      return acc + el
    }, 0)

    return result * depth
  }