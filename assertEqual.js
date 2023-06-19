//reminder - if nothing happens (i.e. true), all good! otherwise error message in console
//function implementation:

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//test code:
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("forty-two", 42);
assertEqual("towel", "towel");
assertEqual("Babelfish", "Vogon");
assertEqual(42, 42);
