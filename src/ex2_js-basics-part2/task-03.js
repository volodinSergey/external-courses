const getNumbersOfEvenAndOddArrayItems = (array) => {
  const filteredArrayWithOnlyNums = array.filter((item) => typeof item === 'number');
  let evenItemsNumber = 0;
  let oddItemsNumber = 0;
  let zeroesNumber = 0;

  filteredArrayWithOnlyNums.forEach((item) => {
    if (item === 0) {
      zeroesNumber += 1;
    } else if (item % 2 === 0) {
      evenItemsNumber += 1;
    } else {
      oddItemsNumber += 1;
    }
  });

  return [evenItemsNumber, oddItemsNumber, zeroesNumber];
};

module.exports = getNumbersOfEvenAndOddArrayItems;
