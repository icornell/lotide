const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
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

//test code:
const testObject = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"
assertEqual(testObject, "noma");
assertEqual(testObject, "Ora");
