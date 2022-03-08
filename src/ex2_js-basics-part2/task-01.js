const getNumberOrStringDataType = (data) => {
  const checkForNaN = (incomingData) => !Number.isNaN(incomingData);
  const compareIncomingAndSetDataTypes = (incomingData, setDataType) => {
    const typeOfIncomingData = typeof incomingData;

    if (typeOfIncomingData === setDataType) return true;

    return false;
  };

  if (checkForNaN(data) && compareIncomingAndSetDataTypes(data, 'number')) return 'number';

  if (checkForNaN(data) && compareIncomingAndSetDataTypes(data, 'string')) return 'string';

  return undefined;
};

module.exports = getNumberOrStringDataType;
