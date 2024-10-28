// calculateMedian calculates the median of a list of numbers
function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  // sort the list array in an ascending order
  const sortedArr = list.sort((a, b) => a - b);
  let median = 0;
  
  if (list.length % 2 === 0) {
    // median for even length elements
    median += (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
  } else {
    // median for odd length elements
    median += sortedArr[middleIndex];
  }
  return median;
}

module.exports = {
  calculateMedian,
};
