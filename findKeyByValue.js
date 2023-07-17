//implement function findKeyByValue which takes in an object and a value
// it should scan the object and return the first key which contains the given value
// if no key is found, return undefined

const findKeyByValue = function (object, value) {
  for (let key of Object.keys(object)) {
    //use Object.keys() to search through all the object keys
    if (object[key] === value) {
      //for... of loop to loop through the returned keys above
      return key;
    }
  }
};

//test cases moved to test/findKeyByValueTest.js

module.exports = findKeyByValue;
