const getNumbersOfEvenAndOddArrayItems = (array) => {
  const resultArray = [];
  const filteredArray = array.filter((item) => typeof item === 'number');
  const evenItemsNumber = filteredArray.filter((item) => (item % 2 === 0) && (item !== 0)).length;
  const oddItemsNumber = filteredArray.filter((item) => item % 2 !== 0).length;
  let zeroesNumber;

  if (array.some((item) => item === 0)) {
    zeroesNumber = array.filter((item) => item === 0).length;
  } else {
    zeroesNumber = 0;
  }

  resultArray.push(evenItemsNumber, oddItemsNumber, zeroesNumber);

  return resultArray;
};

module.exports = getNumbersOfEvenAndOddArrayItems;
