const getArrayFromPropertyPath = (propertyPath) => {
  if (Array.isArray(propertyPath)) return propertyPath;

  return propertyPath.split('.');
};

const getProperty = (object, propertyPath) => {
  const tranformedPathInArray = getArrayFromPropertyPath(propertyPath);

  if (object && tranformedPathInArray.length >= 1) {
    return getProperty(object[tranformedPathInArray.shift()], tranformedPathInArray);
  }

  return object;
};

module.exports = getProperty;
