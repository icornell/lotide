/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};*/
//inplement a function which takes two arrays and returns true or false, dependant on a perfect match
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
//test code
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);