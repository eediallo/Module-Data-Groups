function parseQueryString(queryString) {
  const queryParams = {}; // to store the key-value pairs

  const keyValuePairs = queryString.split("&"); // separate the queryString by &
  for (let pair of keyValuePairs) {
    const [key, value] = pair.split("="); //separate pair by =
    queryParams[key] = value; // mutate queryParams
  }

  return queryParams;
}
module.exports = parseQueryString;
