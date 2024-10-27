// function sumValues(list) {
//   let total = 0;

//   for (let i = 0; i < list.length; i++) {
//     total += list[i];
//   }

//   return total;
// }

//sumValues sum the items of the list array and return the sum
const sumValues = (list) => list.reduce((acc, curr) => acc + curr, 0);

console.log(sumValues([2, 5, 5, 3]));
