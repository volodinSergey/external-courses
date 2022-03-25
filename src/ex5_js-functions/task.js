const Calculator = () => {
  let result = 0;

  return {
    getResult: () => result,

    reset: () => {
      result = 0;
    },

    add: function addNum(num = 0) {
      if (num) result += num;

      return addNum;
    },

    subtract: function substractNum(num = 0) {
      if (num) result -= num;

      return substractNum;
    },

    divide: function divideNum(num = 0) {
      if (num) result /= num;

      return divideNum;
    },

    multiply: function multiplyNum(num = 0) {
      if (num) result *= num;

      return multiplyNum;
    },
  };
};

const calculator = Calculator();

module.exports = calculator;
