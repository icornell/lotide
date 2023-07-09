// Create a function that returns the first element of an array
const assertEqual = require('./assertEqual');//importing assertEqual function
const head = function(array) {
  return array[0];
};
//test code for head.js now in test/headTest.js

module.exports = head;//exporting head function