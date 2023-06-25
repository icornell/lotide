const eqArrays = function(array1, array2) {
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
const assertArraysEqual = function(eqArrays) {
  if (eqArrays === false) {
    console.log(`🛑These arrays are not equal`);
  } else {
    console.log(`✅These arrays are equal`);
  }
};
/*
Implement middle which will take in an array and return the middle-most element(s) of the given array.
*/

const middle = function(array) {
  if (array.length <= 2) {//For arrays with one or two elements, there is no middle. Return an empty array.
    console.log([]);
  } else if (array.length % 2 === 1) {//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    let evenResult = array[Math.floor(array.length / 2)];
    console.log(evenResult);
  } else if (array.length % 2 !== 0) {//For arrays with odd number of elements, an array containing a single middle element should be returned.
    let oddResult = array[Math.floor((array.length - 1) / 2)];
    console.log(oddResult);
  } else {//if middle is even, include the two middle elements
    let evenMiddleOne = (array.length / 2);//divide to get the first middle value
    let evenMiddleTwo = (array.length / 2 + 1);//divide and subtract one to get the second middle value
    console.log(evenMiddleOne, evenMiddleTwo);
  }
};

//test cases:
middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]