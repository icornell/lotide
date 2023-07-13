/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/
const assertArraysEqual = function (eqArrays) {
  if (eqArrays === false) {
    console.log(`🛑These arrays are not equal`);
  } else {
    console.log(`✅These arrays are equal`);
  }
};

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

const words = ["So", "long", "and", "thanks", "for", "all", "the", "fish"]; //add a collection of words to your map file:

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

const results2 = map(words, (word) => word.length);
console.log(results2);
assertArraysEqual(results2, [2, 4, 3, 6, 3, 3, 3, 4]);

const results3 = map(words, (word) => word);
console.log(results3);
assertArraysEqual(results3, [
  "So",
  "long",
  "and",
  "thanks",
  "for",
  "all",
  "the",
  "fish",
]);
