const getPropertyFromProto = (property, object) => {
  const prototype = Object.getPrototypeOf(object);

  if (prototype.hasOwnProperty(property)) return prototype[property];

  return undefined;
};

module.exports = getPropertyFromProto;
