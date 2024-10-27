//sumValues sum the items of the list array and return the sum
const sumValues = (list) => list.reduce((acc, curr) => acc + curr, 0);

const calculateMean = (list) => sumValues(list) / list.length;

module.exports = {
  calculateMean,
};
