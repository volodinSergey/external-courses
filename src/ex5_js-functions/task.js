const Calculator = () => {
  let result = 0;

  const addZeroToResult = (res = result) => res + 0;

  const getResult = () => result;

  const reset = () => {
    result = 0;
  };

  const add = (...args) => {
    if (args.length) result += args.reduce((prev, next) => prev + next);

    addZeroToResult();

    return add;
  };

  const subtract = (...args) => {
    if (args.length) result -= args.reduce((prev, next) => prev + next);

    addZeroToResult();

    return subtract;
  };

  const divide = (...args) => {
    if (args.length) result /= args.reduce((prev, next) => prev + next);

    addZeroToResult();

    return divide;
  };

  const multiply = (...args) => {
    if (args.length) result *= args.reduce((prev, next) => prev + next);

    addZeroToResult();

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
