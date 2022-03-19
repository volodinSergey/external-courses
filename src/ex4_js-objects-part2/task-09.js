const addWord = (mainString, addedString, index) => {
  const wordsArray = mainString.split(' ');

  wordsArray.splice(index + 1, 0, addedString);

  return wordsArray.join(' ');
};

module.exports = addWord;
