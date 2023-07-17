/*
Implement the function findKey which takes in an object and a callback.
It should scan the object and return the first key for which the callback
returns a truthy value. If no key is found, then it should return undefined.
*/
const findKey = function (obj, callback) {
  for (let key of Object.keys(obj)) {
    //use Object.keys() to search through all the object keys
    if (callback(obj[key])) {
      //find the first key that the callback looks for
      return key; //return that key
    }
  }
};

//test code moved to test/findKeyTest.js

module.exports = findKey;
