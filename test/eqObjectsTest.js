const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  it("returns true for { color: 'red', size: 'medium' } and { size: 'medium', color: 'red' }", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });
  it("returns false for { color: 'red', size: 'medium' } and { size: 'medium', color: 'red', sleeveLength: 'long' }", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = {
      size: "medium",
      color: "red",
      sleeveLength: "long",
    };
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });
  it("returns true for objects to have the same numbers with the same keys, in a different order", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });
  it("returns false for two objects of differing sizes ", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab, abc));
  });
  it("returns false if one of the objects is not an object", () => {
    const ab = { a: "1", b: "2" };
    const abc = 1;
    assert.isFalse(eqObjects(ab, abc));
  });
});