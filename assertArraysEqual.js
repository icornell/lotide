//inplement a function which takes two arrays and returns true or false, dependant on a perfect match
const assertEqual = require('./assertEqual');//importing assertEqual function
const eqArrays = require('./eqArrays');//importing eqArrays function

const assertArraysEqual = function(eqArrays) {
  if (eqArrays === false) {
    console.log(`🛑These arrays are not equal`);
  } else {
    console.log(`✅These arrays are equal`);
  }
};
//test code moved to test/assertArraysEqualTest.js

module.exports = assertArraysEqual;