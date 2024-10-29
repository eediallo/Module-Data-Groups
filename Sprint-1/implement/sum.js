function sum(elements) {
  let sum = 0;
  if (Array.isArray(elements) && elements.length === 0) {
    return 0;
  }

  if (elements.length === 1) {
    return elements[0];
  }

  for (let num of elements) {
    sum += num;
  }

  return sum;
}

module.exports = sum;
