const Calculator = () => {
  let result = 0;

  return {
    getResult: () => result,

    reset: () => {
      result = 0;
    },

    add: function addNumber(num = 0) {
      if (num) result += num;

      return addNumber;
    },

    subtract: function substractNumber(num = 0) {
      if (num) result -= num;

      return substractNumber;
    },

    divide: function divideNumber(num) {
      if (num) result /= num;

      return divideNumber;
    },

    multiply: function multiplyNumber(num) {
      if (num) result *= num;

      return multiplyNumber;
    },
  };
};

const calculator = Calculator();

module.exports = calculator;
