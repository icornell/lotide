//inplement a function which takes two arrays and returns true or false, dependant on a perfect match
const eqArrays = require("./eqArrays"); //importing eqArrays function

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === false) {
    console.log(`🛑These arrays are not equal`);
    return false;
  } else {
    console.log(`✅These arrays are equal`);
    return true
  }
};

module.exports = assertArraysEqual;