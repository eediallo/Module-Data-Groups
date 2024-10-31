function parseQueryString(queryString) {
  const queryObject = {};

  // separate querySting with = separator
  const [key, value] = queryString.split("=");
  queryObject[key] = value; //update queryObject
  if (queryString === "") {
    return {};
  } else {
    return queryObject;
  }
}

//parseQueryString("color=blue");

module.exports = parseQueryString;
