//return a slice of the array with elements taken from the beginning until the callback returns a truthy value

const takeUntil = function (array, callback) {
  let resultArray = []; //create a new array to store the results
  for (let element of array) {
    //for loop to look through each element of the array
    if (!callback(element)) {
      //if the callback does not equal the element of the callback we are stopping the loop at
      resultArray.push(element); //push that element to the new array and continue to run through the loop
    } else {
      return resultArray; //return the final results array thus ending the for loop
    }
  }
};
//test code moved to test/takeUntilTest.js
module.exports = takeUntil;
