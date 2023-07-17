const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns [h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ]] for letterPositions('hello')", () => {
    assert.deepEqual(letterPositions("hello"), {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4],
    });
  });
  it("returns [  h: [ 0 ], o: [ 1, 9 ], w: [ 2 ], a: [ 4 ], r: [ 5 ], e: [ 6 ], y: [ 8 ],u: [ 10 ]] for letterPositions('how are you')", () => {
    assert.deepEqual(letterPositions("how are you"), {
      h: [0],
      o: [1, 9],
      w: [2],
      a: [4],
      r: [5],
      e: [6],
      y: [8],
      u: [10],
    });
  });
});
