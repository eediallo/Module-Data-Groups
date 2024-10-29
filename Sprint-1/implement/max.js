function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity;
  }

  let max = elements[0];

  for (let num of elements) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

module.exports = findMax;
