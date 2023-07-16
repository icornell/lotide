const without = require("../without");
const assert = require("chai").assert;
//const words = ["hello", "world", "lighthouse"];

describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1', '2'] for ['1', '2', '3'], [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse'], ['lighthouse']", () => {
    assert.deepEqual(
      without(["hello", "world", "lighthouse"], ["lighthouse"]),
      ["hello", "world"]
    );
  });
});
