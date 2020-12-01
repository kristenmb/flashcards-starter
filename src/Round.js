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
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    this.turn++;
    return turn.giveFeedback();
  }

};

module.exports = Round;

//takeTurn - updates turns count, evalutes guesses, gives feedback and stores ids of incorrect guesses

//calculate percetn correct calculate sand returns percentage of correct guesses
//endround - prints collowing : round over! you answered <>% of the quesgtions correctly!
