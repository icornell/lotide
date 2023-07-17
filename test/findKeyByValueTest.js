const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

describe("#findKeyByValue", () => {
  it("returns 'drama' for findKeyByValue(bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for findKeyByValue(bestTVShowsByGenre, 'That '70s Show')", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
      undefined
    );
  });
  it("returns 'horror' for findKeyByValue(bestTVShowsByGenre, 'Supernatural')", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "Supernatural"),
      "horror"
    );
  });
  it("returns 'comedy' for findKeyByValue(bestTVShowsByGenre, 'Eastenders')", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "Eastenders"),
      "soap"
    );
  });
  it("returns undefined for findKeyByValue(bestTVShowsByGenre, 'Star Trek')", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "Star Trek"),
      undefined
    );
  });
});

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  soap: "Eastenders",
  horror: "Supernatural",
};
