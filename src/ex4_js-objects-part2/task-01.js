/* eslint-disable no-restricted-syntax */
const getPropertyFromProto = (property, object) => {
  for (const item in object.__proto__) {
    if (item === property) return object[item];
  }

  return undefined;
};

module.exports = getPropertyFromProto;
