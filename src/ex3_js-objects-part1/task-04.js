const compareObjectPropertyWithStringAndAddNewProperty = (string, originalObject) => {
  const newObject = { ...originalObject };

   if (!(newObject.hasOwnProperty(string))) {
    newObject[`${string}`] = 'new';
  }

  return newObject;
};

module.exports = compareObjectPropertyWithStringAndAddNewProperty;
