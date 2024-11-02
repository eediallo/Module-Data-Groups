function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfFirstEqual = pair.indexOf('=')
    const key = pair.slice(0, indexOfFirstEqual)
    console.log(key)
    const value = pair.slice(indexOfFirstEqual + 1)
    console.log(value)
    console.log(indexOfFirstEqual)
   queryParams[key] = value;
  }

  console.log(queryParams)
  return queryParams;
}

//parseQueryString("equation=x=y+1")

module.exports = parseQueryString;
