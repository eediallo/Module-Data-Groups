function createLookup(countryCurrencyPairs) {
  const codeCurrencyPairs = {};

  for (let currencyPair of countryCurrencyPairs) {
    const country = currencyPair[0];
    const currency = currencyPair[1];
    codeCurrencyPairs[country] = currency;
  }
  return codeCurrencyPairs;
}
module.exports = createLookup;
