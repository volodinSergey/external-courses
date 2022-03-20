const addWord = (mainString, addedString, index) => {
  const wordsArray = mainString.split(' ');
  let newString = '';

  for (let i = 0; i < wordsArray.length; i += 1) {
    if (i - 1 === index) newString += `${addedString} `;

    newString += `${wordsArray[i]} `;
  }

  return newString.trim();
};

module.exports = addWord;
