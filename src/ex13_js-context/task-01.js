const Calculator = {
  state: 0,

  getResult() {
    console.log(this.state);

    return this;
  },

  setState(number = 0) {
    this.state = number;

    return this;
  },

  reset() {
    this.state = 0;

    return this;
  },

  add(number = 0) {
    this.state += number;

    return this;
  },

  substract(number = 0) {
    this.state -= number;

    return this;
  },

  multiply(number = 0) {
    this.state *= number;

    return this;
  },

  divide(number = 1) {
    this.state /= number;

    return this;
  },

  fetchData(callback) {
    Promise.resolve(callback).then((this.state = 500));

    return this;
  },
};

module.exports = Calculator;
