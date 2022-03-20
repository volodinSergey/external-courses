const deleteGapsInString = (string) => {
  const isFirstSymbolGap = string.charAt(0) === ' ';
  const isLastSymbolGap = string[string.length - 1] === ' ';

  if (isFirstSymbolGap && isLastSymbolGap) return string.slice(1, -1);

  if (isFirstSymbolGap) return string.slice(1);

  if (isLastSymbolGap) return string.slice(-1);

  return false;
};

module.exports = deleteGapsInString;
