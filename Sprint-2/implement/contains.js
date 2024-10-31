function contains(obj, key) {
  const objKeys = Object.keys(obj); // holds keys of obj
  if (objKeys.length === 0) {
    return false;
  }
}

module.exports = contains;
