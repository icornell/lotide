const eqArrays = function (array1, array2) {
  //added as required
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

const assertEqual = function (actual, expected) {
  //included as required
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get false
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    //create arrays with objects using Objects.keys
    return false; //compare array lengths to see if the arrays are not equal(if not, stop and return false)
  }
  for (const key of Object.keys(object1)) {
    //check through one of the objects using a for...of loop as the keys are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //make sure that the two values are arrays and then pass them to eqArrays if so
      if (!eqArrays(object1[key], object2[key])) {
        //check using negation of eqArrays to confirm they are arrays
        return false; //if they are not arrays return false otherwise continue to compare the values
      } else if (object1[key] !== object2[key]) {
        return false; //return false as soon as we don't get a match
      }
    }
  }
  return true; //if you get to the end of the entire end of the loop with all keys matched, return true
};

//test code:
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject));

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject));
