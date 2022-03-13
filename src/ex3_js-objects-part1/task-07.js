const useArrayOrObject = (object) => {
  if (Array.isArray(object)) return [];

  return {};
};

const deepObjectCopy = (objectOrPrimitiveType) => {
  let newobject;
  if (typeof (objectOrPrimitiveType) === 'object' && objectOrPrimitiveType !== null) {
    newobject = useArrayOrObject(objectOrPrimitiveType);

    const keys = Object.keys(objectOrPrimitiveType);

    keys.forEach((key) => {
      newobject[key] = deepObjectCopy(objectOrPrimitiveType[key]);
    });
  } else {
    newobject = objectOrPrimitiveType;
  }

  return newobject;
};

module.exports = deepObjectCopy;
