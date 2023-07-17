const findKey = require("../findKey");
const assert = require("chai").assert;

const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 },
};

describe("#findKey", () => {
  it("returns 'noma' if restaurant , (x) => x.stars === 2)", () => {
    assert.strictEqual(
      findKey(restaurants, (x) => x.stars === 2),
      "noma"
    );
  });
  it("returns 'Blue Hill' for findKey(restaurant, (x) => x.stars === 1)", () => {
    assert.strictEqual(
      findKey(restaurants, (x) => x.stars === 1),
      "Blue Hill"
    );
  });
  it("returns 'Akaleri' for findKey(restaurant, (x) => x.stars === 3)", () => {
    assert.strictEqual(
      findKey(restaurants, (x) => x.stars === 3),
      "Akaleri"
    );
  });
  it("returns 'undefined' for findKey(restaurant, (x) => x.stars === 0)", () => {
    assert.strictEqual(
      findKey(restaurants, (x) => x.stars === 0),
      undefined
    );
  });
});  
