const isEmpty = require("./isEmpty.js");

function sum(elements) {
  let sum = 0;
  if (isEmpty(elements)) {
    return 0;
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
