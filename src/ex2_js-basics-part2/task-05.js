const getMaxArrayItem = (array) => {
  let maxItem = array[0];

  for (let i = 0; i < array.length; i += 1) {
    const iterableItem = array[i];

    if (iterableItem > maxItem) maxItem = iterableItem;
  }

  return maxItem;
};

module.exports = getMaxArrayItem;
