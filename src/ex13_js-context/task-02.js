function Hangman(guessedWord) {
  this.guessedWord = guessedWord;
  this.errors = 6;
  this.guessedString = '_'.repeat(this.guessedWord.length);
  this.wrongSymbols = [];
}

Hangman.prototype.getGuessedWord = function getGuessedWord() {
  console.log(this.guessedWord);

  return this;
};

Hangman.prototype.getErrorsLeft = function getErrorsLeft() {
  console.log(this.errors);

  return this;
};

Hangman.prototype.getGuessedString = function getGuessedString() {
  console.log(this.guessedString);

  return this;
};

Hangman.prototype.getWrongSymbols = function getWrongSymbols() {
  console.log(this.wrongSymbols);

  return this;
};

Hangman.prototype.getStatus = function getStatus() {
  console.log(`${this.guessedString} | errors left ${this.errors}`);

  return this;
};

Hangman.prototype.startAgain = function startAgain(newWord) {
  this.guessedWord = newWord;
  this.errors = 6;
  this.guessedString = '_'.repeat(this.guessedWord.length);
  this.wrongSymbols = [];

  return this;
};

Hangman.prototype.guess = function guess(guessedLetter) {
  if (this.errors <= 1) {
    console.log('You have lost!!');

    return this;
  }

  if (this.guessedWord.includes(guessedLetter)) {
    const guessedWordArray = this.guessedWord.split('');
    const guessedStringArray = this.guessedString.split('');

    guessedWordArray.forEach((letter, index) => {
      if (letter === guessedLetter) guessedStringArray[index] = guessedLetter;
    });

    this.guessedString = guessedStringArray.join('');

    if (this.guessedString === this.guessedWord) {
      console.log(`${this.guessedString} | You won!`);

      return this;
    }

    console.log(this.guessedString);

    return this;
  }

  this.errors -= 1;
  this.wrongSymbols.push(guessedLetter);

  console.log(`wrong letter, errors left ${this.errors} | ${this.wrongSymbols}`);

  return this;
};

module.exports = Hangman;
