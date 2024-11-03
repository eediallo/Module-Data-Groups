function removePunctuation(str) {
  const isString = typeof str === "string";
  if (!isString) {
    throw new Error("Param must be of type string");
  }

  const strWithoutPunctuation = "";
  if (str.trim() === "") {
    return strWithoutPunctuation;
  }

  return strWithoutPunctuation;
}

module.exports = removePunctuation;
