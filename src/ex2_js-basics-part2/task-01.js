const getNumberOrStringTypeOfData = (data) => {
  if (!Number.isNaN(data) && typeof data === 'number') {
    return 'number';
  }

  if (!Number.isNaN(data) && typeof data === 'string') {
    return 'string';
  }

  return undefined;
};

module.exports = getNumberOrStringTypeOfData;
