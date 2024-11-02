function tally(arr) {
  const frequencyOfItems = {};
  if (Array.isArray(arr) && arr.length === 0) {
    return frequencyOfItems;
  }

  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    // check if key exist in frequencyOfItems
    if (frequencyOfItems.hasOwnProperty(arr[i])) {
      frequencyOfItems[arr[i]] += count; // update the count
    } else {
      frequencyOfItems[arr[i]] = count; // first time for each item in the array
    }
  }
  return frequencyOfItems;
}
module.exports = tally;
