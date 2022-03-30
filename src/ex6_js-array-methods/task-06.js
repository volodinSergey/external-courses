const myReduce = (array, callback, initialValue) => {
  let previousValue = (initialValue === undefined) ? array[0] : initialValue;
  const begin = (initialValue === undefined) ? 1 : 0;

  for (let i = begin; i < array.length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
};

module.exports = myReduce;
