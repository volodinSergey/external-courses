const checkTheSameArrayItems = (array) => {
  const firstItem = array[0];

  if (array.every((item) => item === firstItem)) {
    return true;
  }

  return false;
};

module.exports = checkTheSameArrayItems;
