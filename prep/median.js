/**
 * Calculates the median of a given list of numbers.
 *
 * @param {number[]} list - An array of numbers.
 * @returns {number} The median of the list.
 */
function calculateMedian(list) {
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
