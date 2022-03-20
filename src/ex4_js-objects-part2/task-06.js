const changeString = (string) => {
  const stringsArray = string.split(' ');

  for (let i = 0; i < stringsArray.length; i += 1) {
    stringsArray[i] = stringsArray[i].charAt(0).toUpperCase() + stringsArray[i].slice(1);
  }

  return stringsArray.join(' ');
};

module.exports = changeString;
