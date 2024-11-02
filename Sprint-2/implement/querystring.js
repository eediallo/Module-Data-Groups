function parseQueryString(queryString) {
  const queryParams = {};

  if (
    typeof queryString !== "string" ||
    queryString.startsWith("=") ||
    queryString.trim().length === 0
  ) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfFirstEqual = pair.indexOf("=");
    const key = pair.slice(0, indexOfFirstEqual);
    console.log(key);
    const value = pair.slice(indexOfFirstEqual + 1);
    console.log(value);
    console.log(indexOfFirstEqual);
    queryParams[key] = value;
  }

  console.log(queryParams);
  return queryParams;
}

parseQueryString([89, 88]);

module.exports = parseQueryString;
