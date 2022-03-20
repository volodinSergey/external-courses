const changeStringLength = (string, position) => {
  if (position < string.length) return string.slice(0, position - 1) + ['…'];

  return false;
};
module.exports = changeStringLength;
