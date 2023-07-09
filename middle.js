/*
Implement middle which will take in an array and return the middle-most element(s) of the given array.
*/

const middle = function(array) {
  if(array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[(array.length / 2) - 1], array[array.length / 2]];
  } else if (array.length % 2 !== 0) {
    return [array[Math.floor(array.length / 2)]];
  } else {
    let evenMiddleOne = (array.length / 2);
    let evenMiddleTwo = (array.length / 2 + 1);
    return (evenMiddleOne, evenMiddleTwo);
  }
};
//test cases moved to middleTest.js

module.exports = middle;