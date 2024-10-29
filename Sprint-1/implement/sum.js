function sum(elements) {
  let sum = 0;
  if (Array.isArray(elements) && elements.length === 0) {
    return 0;
  }

  if (elements.length === 1) {
    return elements[0];
  }

  for (let num of elements) {
    if (!isNaN(num) && num % 2 !== 0) {
      sum += parseFloat(num.toFixed(2));
    } else if (!isNaN(num)) {
      sum += num;
    }
  }
  sum = parseFloat(sum.toFixed(2));

  return sum;
}

module.exports = sum;
