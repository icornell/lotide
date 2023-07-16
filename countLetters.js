//Create a function called countLetters
const countLetters = function (sentence) {
  let resultCount = {}; //empty object to fill later
  for (letter in sentence) {
    //suggested to use a for...loop
    let separateLetters = sentence[letter]; //separate everthing out
    if (resultCount[separateLetters]) {
      //if there is a duplicate letter, add one to the total count
      resultCount[separateLetters]++;
    } else {
      resultCount[separateLetters] = 1; //if not, count the letter and move on
    }
  }
  return resultCount; //display the results
};

module.exports = countLetters;
