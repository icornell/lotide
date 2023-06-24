const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};
const assertArraysEqual = function(eqArrays) {
  if (eqArrays === false) {
    console.log(`🛑These arrays are not equal`);
  } else {
    console.log(`✅These arrays are equal`);
  }
};
//take an array which holds other arrays inside it - "flatten" into a single-level array
// copy assertArraysEqual and eqArrays functions here
//create a function flatten that will take in an array containing elements including nexted arrays of elements nd return a "flattened" version o f the arrya
//only need to handle one level of nesting
//use array.concat to concatenate the arrays together and array.push to add the new elements from the old array
// eg: flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
const flatten = function(oldArray) {
  let newArray = [];
  for (let i = 0; i < oldArray.length; i++) {
    let newElement = oldArray[i];
    if (Array.isArray(newElement)) {
      newArray = newArray.concat(newElement);
    } else {
      newArray.push(newElement);
    }
  } return newArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]