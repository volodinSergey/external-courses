const getArgumentsSum = require('./getArgumentsSum');
const addZeroToResult = require('./addZeroToResult');

const Calculator = () => {
  let result = 0;

  const getResult = () => result;

  const reset = () => {
    result = 0;

    return result;
  };

  const add = (...args) => {
    if (args.length) result += getArgumentsSum(args);

    addZeroToResult(result);

    return add;
  };

  const subtract = (...args) => {
    if (args.length) result -= getArgumentsSum(args);

    addZeroToResult(result);

    return subtract;
  };

  const divide = (...args) => {
    if (args.length) result /= getArgumentsSum(args);

    addZeroToResult(result);

    return divide;
  };

  const multiply = (...args) => {
    if (args.length) result *= getArgumentsSum(args);

    addZeroToResult(result);

    return multiply;
  };

  return {
    getResult,
    reset,
    add,
    subtract,
    divide,
    multiply,
  };
};

const calculator = Calculator();

module.exports = calculator;
