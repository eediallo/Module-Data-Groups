function parseQueryString(queryString) {
  const queryObject = {};

  // separate querySting with = separator and store the items in pair
  const pair = queryString.split("=");
  // gets the key and value of the pair array
  const key = pair[0];
  const value = pair[1];

  // update queryObject
  queryObject[key] = value;
  if (queryString === "") {
    return {};
  } else {
    return queryObject;
  }
}

parseQueryString("color=blue");

module.exports = parseQueryString;
