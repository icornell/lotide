const assert = require("chai").assert;
const countLetters = require("../countLetters");
//test code:

describe("#countLetters", () => {
  it("should return { t: 3, e: 3, s: 1, i: 1, n: 1, g: 1, ' ': 2, h: 1, c: 1, o: 1, d: 1 } for 'testing the code;", () => {
    assert.deepEqual(countLetters("testing the code"), {
      t: 3,
      e: 3,
      s: 1,
      i: 1,
      n: 1,
      g: 1,
      " ": 2,
      h: 1,
      c: 1,
      o: 1,
      d: 1,
    });
  });
  it("should return { l: 2, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 1, e: 1, a: 1, b: 1 } for 'lighthouse labs'", () => {
    assert.deepEqual(countLetters("lighthouse labs"), {
      l: 2,
      i: 1,
      g: 1,
      h: 2,
      t: 1,
      o: 1,
      u: 1,
      s: 2,
      e: 1,
      " ": 1,
      a: 1,
      b: 1,
    });
  });
  it("should return { m: 1, e: 1, a: 1, n: 2, i: 2, g: 1, ' ': 2, o: 1, f: 1, l: 1 } for 'meaning of life'", () => {
    assert.deepEqual(countLetters("meaning of life"), {
      m: 1,
      e: 2,
      a: 1,
      n: 2,
      i: 2,
      g: 1,
      " ": 2,
      o: 1,
      f: 2,
      l: 1,
    });
  });
  it("should return { f: 1, o: 1, r: 1, t: 1, y: 1, '-': 1, w: 1, o: 1 } for 'forty-two'", () => {
    assert.deepEqual(countLetters("forty-two"), {
      f: 1,
      o: 2,
      r: 1,
      t: 2,
      y: 1,
      "-": 1,
      w: 1,
    });
  });
});

