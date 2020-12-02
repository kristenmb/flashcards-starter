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
    return turn.giveFeedback();
  }

  calculatePercentage() {
    const correctGuesses = this.deck.cards.length - this.incorrectGuesses.length;
    const percent = (correctGuesses / this.deck.cards.length) * 100;
    return Math.floor(percent);
  }

  endRound() {
    return `*Round over!* You answered ${this.calculatePercentage()}% of the questions correctly!`
  }
}

module.exports = Round;
