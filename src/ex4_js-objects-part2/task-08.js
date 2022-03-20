const toLowerCamelCaseEachWord = (string) => {
  const wordsArray = string.split(' ');

  for (let i = 0; i < wordsArray.length; i += 1) {
    if (i === 0) {
      wordsArray[i] = wordsArray[i].toLowerCase();
    } else {
      wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1).toLowerCase();
    }
  }

  return wordsArray.join('');
};

module.exports = toLowerCamelCaseEachWord;
