function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity;
  }

  let max = -Infinity;

  for (let num of elements) {
    if (!isNaN(num) && num > max) {
      max = num;
    }
  }
  return max;
}

module.exports = findMax;
