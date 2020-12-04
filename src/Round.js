const Turn = require('../src/Turns');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turn];
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    this.turn++;
    if (this.turn > this.deck.cards.length) {
      this.endRound();
    }
    return turn.giveFeedback();
  }

  calculatePercentage() {
    const correctGuesses = this.deck.cards.length - this.incorrectGuesses.length;
    const percent = Math.floor((correctGuesses / this.deck.cards.length) * 100);
    return percent;
  }

  endRound() {
    console.log(`*Round over!* You answered ${this.calculatePercentage()}% of the questions correctly!`);
    return `*Round over!* You answered ${this.calculatePercentage()}% of the questions correctly!`;
  }
}

module.exports = Round;
