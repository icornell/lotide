const assertObjectsEqual = require('../assertObjectsEqual');

//no test code this time. instead, call the function and confirm that the message printed to the console is correct.
const one = { a: "4", b: "2" };
const two = { b: "2", a: "4" };
const three = { a: "five", b: "25", c: "five" };
const four = { c: "five", b: ["25", 25] };
const five = { d: "10", e: 100, c: "1000" };
const six = { c: "1000", d: "10", e: 100 };

assertObjectsEqual(one, two); // => should PASS
assertObjectsEqual(three, four); // => should FAIL
assertObjectsEqual(five, six); // => should PASS
assertObjectsEqual(one, six); // => should FAIL