function findMax(elements) {
  let max = 0;
  if (elements.length === 0) {
    max -= Infinity;
  }

  if (elements.length === 1) {
    max += elements[0];
  }

  return max;
}

module.exports = findMax;
