const map = require("../map");
const assert = require("chai").assert;

const words = ["So", "long", "and", "thanks", "for", "all", "the", "fish"]; //add a collection of words to your map file

describe("#map", () => {
  it("returns ['S', 'l', 'a', 't', 'f', 'a', 't', 'f'] for ['So', 'long', 'and', 'thanks', 'for', 'all', 'the', 'fish'] and word[0]", () => {
    assert.deepEqual(
      map(words, (word) => word[0]),
      ["S", "l", "a", "t", "f", "a", "t", "f"]
    );
  });
  it("returns [2, 4, 3, 6, 3, 3, 3, 4] for ['So', 'long', 'and', 'thanks', 'for', 'all', 'the', 'fish'] and word.length", () => {
    assert.deepEqual(
      map(words, (word) => word.length),
      [2, 4, 3, 6, 3, 3, 3, 4]
    );
  });
  it("returns ['So', 'long', 'and', 'thanks', 'for', 'all', 'the', 'fish'] for ['So', 'long', 'and', 'thanks', 'for', 'all', 'the', 'fish'] and word", () => {
    assert.deepEqual(
      map(words, (word) => word),
      ["So", "long", "and", "thanks", "for", "all", "the", "fish"]
    );
  });
});
