const without = function (source, itemsToRemove) {
  // take the items that we have been given and then look at the item that we want to remove with the filter function
  let filteredArray = source.filter(
    (element) => !itemsToRemove.includes(element)
  );
  return filteredArray;
};
//test code moved to test/withoutTest.js
module.exports = without;
