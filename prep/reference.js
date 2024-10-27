const list = [10, 20, 30];

const copy = list;


console.log(list);
console.log(copy);
console.log(list === copy)
console.log("==============");


// calculates median of list
const median = list.splice(Math.floor(list.length/2), 1)
console.log(median)

copy.push(100, 200);
console.log(list);
console.log(copy);
