function parseQueryString(queryString) {
  const queryParams = {};

  // separate querySting with = separator
  const [key, value] = queryString.split("=");

  queryParams[key] = value; // mutate queryParams

  return queryParams;
}
module.exports = parseQueryString;
