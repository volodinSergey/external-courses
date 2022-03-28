const mySlice = (array, begin, end) => {
  const resultArray = [];
  let start = begin || 0;
  let finish = end || array.length;

  if (begin < 0) start = array.length + begin;

  if (end < 0) finish = array.length + end;

  for (let i = start; i < finish; i += 1) {
    resultArray.push(array[i]);
  }

  return resultArray;
};

module.exports = mySlice;
