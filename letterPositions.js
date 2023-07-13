const eqArrays = function (array1, array2) {
  //asked to insert eqArrays here
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};
const assertArraysEqual = function (eqArrays) {
  //asked to insert assertArraysEqual here
  if (eqArrays === false) {
    console.log(`🛑These arrays are not equal`);
  } else {
    console.log(`✅These arrays are equal`);
  }
};
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
//test code
console.log(letterPositions("hello"));
console.log(letterPositions("how are you"));
assertArraysEqual(letterPositions("hello"), [1]);
