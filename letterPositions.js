const letterPositions = function (sentence) {
  const results = {}; //return an object
  for (let i = 0; i < sentence.length; i++) {
    //run through the letters in the sentence
    if (sentence[i] !== " ") {
      //if i does not equal a space character
      if (results[sentence[i]]) {
        //if i is a letter character then:
        results[sentence[i]].push(i); //add one to the running count
      } else {
        results[sentence[i]] = [i]; //let i equal i and continue on
      }
    }
  }
  return results;
};
//test code moved to test/letterPositionsTest.js

module.exports = letterPositions;
