//note: the tail end of the array is all the elements but the "head" or first element.
const assertEqual = require('./assertEqual');//importing assertEqual function
const tail = function(array) {
  let getTailArray = [];
  for (let i = 1; i < array.length; i++) {
    getTailArray.push(array[i]);
  }
  return getTailArray;
};
//test case moved to tailTest.js

module.exports = tail;