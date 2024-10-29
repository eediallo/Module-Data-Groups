// Refactor the implementation of includes to use a for...of loop
function includes(list, target) {
  for (let element of list) {
    const item = element;
    if (item === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
