const stringsSymbolsCounter = (string) => {
  const resultObject = {};
  const lowerCaseString = string.toLowerCase();

  for (let i = 0; i < lowerCaseString.length; i += 1) {
    const symbol = lowerCaseString[i];

    if (!resultObject[symbol]) resultObject[symbol] = 0;

    resultObject[symbol] += 1;
  }

  Object.entries(resultObject).forEach(([key, value]) => console.log(`${key} : ${value}`));
};

module.exports = stringsSymbolsCounter;
