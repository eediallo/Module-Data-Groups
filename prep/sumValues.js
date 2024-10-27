//sumValues sum the items of the list array and return the sum
const sumValues = (list) => list.reduce((acc, curr) => acc + curr, 0);

module.exports = {
	sumValues
};

console.log(sumValues([2, 5, 5, 3]));
