const isPrimeOrCompositeNumber = (num) => {
  const inputNumber = num;
  const STATUS_MESSAGES = {
    wrongDataMessage: 'Данные неверны',
    notPrimeAndCompositeMessage: 'Не причисляется ни к простым, ни к составным числам',
    primeNumberMessage: `Число ${inputNumber} - простое число`,
    compositeNumberMessage: `Число ${inputNumber} - составное число`,
  };

  if (num > 1000) {
    return STATUS_MESSAGES.wrongDataMessage;
  }

  if (num === 0 || num === 1) {
    return STATUS_MESSAGES.notPrimeAndCompositeMessage;
  }

  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      return STATUS_MESSAGES.compositeNumberMessage;
    }

    return STATUS_MESSAGES.primeNumberMessage;
  }

  return undefined;
};

module.exports = isPrimeOrCompositeNumber;
