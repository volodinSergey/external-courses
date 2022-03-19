const changeStringLength = (string, position) => {
  let newString = '';

  if (position < string.length) {
    newString = string.slice(0, position - 1) + ['…'];
  }

  return newString;
};

module.exports = changeStringLength;
