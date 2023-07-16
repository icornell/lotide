//inplement a function which takes two arrays and returns true or false, dependant on a perfect match
const eqArrays = function (array1, array2) {
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
//test cases moved to test/eqArraysTest.js

module.exports = eqArrays;
