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

const without = function(source, itemsToRemove) {
// take the items that we have been given and then look at the item that we want to remove.
// go through the array (source) to find the index number of the item we want to remove (itemsToRemove)
  let emptyArray = [];  
  for (let i = 0; i < source.length; i++) {
    // second loop inside - itemsToRemove - still an array at this point
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        emptyArray.push(source[i]);
      }
    }
  }
  //return resulting array(source);
  return emptyArray;
};
// compare the two arrays - the equality of the elements in the arrays
// if the elements are EQUAL - remove (splice) and move on to the next element
// if NOT EQUAL keep running through the loop
// at the end, return the source so we know the final result of the array
//
//test code:
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
//test case:
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(words);

