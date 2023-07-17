//take an array which holds other arrays inside it - "flatten" into a single-level array
// copy assertArraysEqual and eqArrays functions here
//create a function flatten that will take in an array containing elements including nexted arrays of elements nd return a "flattened" version o f the arrya
//only need to handle one level of nesting
//use array.concat to concatenate the arrays together and array.push to add the new elements from the old array
// eg: flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

const flatten = function (oldArray) {
  let newArray = [];
  for (let i = 0; i < oldArray.length; i++) {
    if (Array.isArray(oldArray[i])) {
      newArray = newArray.concat(flatten(oldArray[i]));//concatenate the arrays together and should be able to handle multiple levels of nesting
    } else {
      newArray.push(oldArray[i]);
    }
  }
  return newArray;
};

module.exports = flatten;
