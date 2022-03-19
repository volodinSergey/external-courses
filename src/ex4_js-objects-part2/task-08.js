const toLowerCaseEachWord = (string) => {
  let newString = '';
  const wordsArray = string.split(' ');

  wordsArray.forEach((word, index) => {
    wordsArray[index] = word.toLowerCase();
  });

  wordsArray.forEach((word, index) => {
    wordsArray[index] = word[0].toUpperCase() + word.slice(1);
    newString += wordsArray[index];
  });

  newString = newString[0].toLowerCase() + newString.substring(1);

  return newString;
};

module.exports = toLowerCaseEachWord;
