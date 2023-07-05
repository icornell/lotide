const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};//included as required
//implement function findKeyByValue which takes in an object and a value
// it should scan the object and return the first key which contains the given value
// if no key is found, return undefined

const findKeyByValue = function(object, value) {
  for (let key of Object.keys(object)) {//use Object.keys() to search through all the object keys
    if (object[key] === value) {//for... of loop to loop through the returned keys above
      return key;
    }
  }
};

//test cases:
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  soap: "Eastenders",
  horror: "Supernatural"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Supernatural"), "horror");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Eastenders"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Star Trek"), undefined);
