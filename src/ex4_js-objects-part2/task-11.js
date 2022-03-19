const stringsSymbolsCounter = (str) => {
  const wordsArray = str.split('');
  const resultObject = {};

  wordsArray.forEach((word) => {
    let n = 0;
    const corectItem = word;

    wordsArray.forEach(() => {
      if (corectItem === word) {
        n += 1;

        resultObject[word] = n;
      }
    });
  });

  Object.keys(resultObject).forEach((key) => {
    console.log(`${resultObject[key]} : ${resultObject.value}`);
  });
};

module.exports = stringsSymbolsCounter;
