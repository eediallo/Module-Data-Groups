// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  if (Array.isArray(target)) {
    return true;
  }

  return false;
}

includes(["a", "b", "c", "d"], "c");

module.exports = includes;
