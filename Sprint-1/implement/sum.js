function sum(elements) {
  if (Array.isArray(elements) && elements.length === 0) {
    return 0;
  }

  if (elements.length === 1) {
    return elements[0];
  }
}

module.exports = sum;
