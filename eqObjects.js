const eqArrays = require("./eqArrays");
// Returns true if both objects have identical keys with identical values.
// Otherwise you get false
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    //create arrays with objects using Objects.keys
    return false; //compare array lengths to see if the arrays are not equal(if not, stop and return false)
  }
  for (const key of Object.keys(object1)) {
    //check through one of the objects using a for...of loop as the keys are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //make sure that the two values are arrays and then pass them to eqArrays if so
    } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      //check if the values are objects and if so, pass them to eqObjects
      return eqObjects(object1[key], object2[key]);
    } else if (!eqArrays(object1[key], object2[key])) {
      //check using negation of eqArrays to confirm they are arrays
      return false; //if they are not arrays return false otherwise continue to compare the values
    } else if (object1[key] !== object2[key]) {
      return false; //return false as soon as we don't get a match
    }
  }
  return true; //if you get to the end of the entire end of the loop with all keys matched, return true
};


//test code moved to test/eqObjectsTest.js
module.exports = eqObjects;