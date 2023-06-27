const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//create a function called countLetters
const countLetters = function(sentence) {
  let resultCount = {};//emptry object to fill later
  for (letter in sentence) {//suggested to use a for...loop
    let separateLetters = sentence[letter];//separate everthing out
    if (resultCount[separateLetters]) {//if there is a duplicate letter, add one to the total count
      resultCount[separateLetters]++;
    } else {
      resultCount[separateLetters] = 1;//if not, count the letter and move on
    }
  } console.log(resultCount);//display the results
};

//test code:
countLetters("testing the code");
countLetters("lighthouse labs");
countLetters("meaning of life");
countLetters("forty-two");