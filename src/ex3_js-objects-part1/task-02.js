const showObjectKeysAndValuesInConsole = (object) => {
  const transformedObjectInArrayWithKeysAndEntries = Object.entries(object);

  transformedObjectInArrayWithKeysAndEntries.forEach(([key, value]) => console.log(`${key}: ${value}`));

  return undefined;
};

module.exports = showObjectKeysAndValuesInConsole;
