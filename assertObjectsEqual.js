const eqArrays = function(array1, array2) {//added as required
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};
/*
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;//added as required to use the util library's inspect function
    if (eqObjects(actual, expected)) {
      console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};
*/
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
//no test code this time. instead, call the function and confirm that the message printed to the console is correct.
const one = {a: "4", b: "2"};
const two = {b: "2", a: "4"};
const three = {a: "five", b: "25", c: "five"};
const four = {c: "five", b: ["25", 25]};
const five = {d: "10", e: 100, c: "1000"};
const six = {c: "1000", d: "10", e: 100};

assertObjectsEqual(one, two); // => should PASS
assertObjectsEqual(three, four); // => should FAIL
assertObjectsEqual(five, six); // => should PASS
assertObjectsEqual(one, six); // => should FAIL
