// test("Calculates the mean of a list of numbers", () => {
//   const list = [3, 50, 7];

//   const currentOutput = calculateMean(list);

//   const targetOutput = 20;

//   expect(currentOutput).toBe(targetOutput);
// });


function sumValues(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }

  return total;
}



console.log(sumValues([2, 5, 5, 3]))