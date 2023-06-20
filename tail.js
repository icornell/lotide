//note: the tail end of the array is all the elements but the "head" or first element.
const assertEqual = function(actual, expected) {//code taken from assertEqual.js
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  let getTailArray = [];
  for (let i = 1; i < array.length; i++) {
    getTailArray.push(array[i]);
  }
  return getTailArray;
};
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
