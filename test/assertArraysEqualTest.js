const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);