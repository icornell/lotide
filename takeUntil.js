const eqArrays = function (array1, array2) {
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
  if (eqArrays === false) {
    console.log(`🛑These arrays are not equal`);
  } else {
    console.log(`✅These arrays are equal`);
  }
};

//return a slice of the array with elements taken from the beginning until the callback returns a truthy value

const takeUntil = function (array, callback) {
  //create the function
  let resultArray = []; //create the new array for the results
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
//test code

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
