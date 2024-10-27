
function calculateMedian(list) {
    const middleIndex = Math.floor(list.length / 2);
    return list[middleIndex];
  }
  

const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);
const mean = calculateMedian(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);
