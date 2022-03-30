const mySlice = (array, begin, end) => {
  const resultArray = [];
  let startPosition = begin;
  let finishPosition = end;

  if ((isNaN(end) || end === undefined) && (isNaN(begin) || begin === undefined)) return array;

  if (isNaN(end) || end === undefined) finishPosition = array.length;

  if (begin < 0 && (isNaN(end) || end === undefined)) return array;

  if (begin < 0) startPosition = array.length + begin;

  if (begin < 0 && begin < -(array.length)) startPosition = 0;

  if (end < begin) finishPosition = begin;

  if (end < 0) finishPosition = array.length + end;

  if (end > array.length) finishPosition = array.length;

  for (let i = startPosition; i < finishPosition; i += 1) {
    resultArray[i - startPosition] = array[i];
  }

  return resultArray;
};

module.exports = mySlice;
