/**
 * Calculates the median of a given list of numbers.
 *
 * @param {number[]} list - An array of numbers.
 * @returns {number} The median of the list.
 */

function isListAnArray(list) {
  if (!Array.isArray(list)) {
    throw new Error(`${list} must be an array`);
  }

  for (let num of list) {
    if (!typeof num !== "number") {
      throw new Error(`${num} must be a number`);
    }
  }
}

function calculateMedian(list) {
  isListAnArray(list); // check if list is an array

  const middleIndex = Math.floor(list.length / 2);
  // sort the list array in an ascending order
  const sortedList = list.sort((a, b) => a - b);

  return list.length % 2 === 0
    ? (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2
    : sortedList[middleIndex];
}

module.exports = {
  calculateMedian,
};
