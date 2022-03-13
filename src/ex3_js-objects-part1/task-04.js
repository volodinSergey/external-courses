const compareObjectPropertyWithStringAndAddNewProperty = (string, originalObject) => {
  const newObject = { ...originalObject };

  if (!(string in newObject) && !(newObject.hasOwnProperty(string))) newObject[`${string}`] = 'new';

  return newObject;
};

module.exports = compareObjectPropertyWithStringAndAddNewProperty;
