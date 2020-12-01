class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }
};

module.exports = Round;

//takeTurn - updates turns count, evalutes guesses, gives feedback and stores ids of incorrect guesses
//when guess is made, new turn instance created
//turn count is updated, regardless of whether guess is correct or incorrect
//next card becomes current card
//guess is evaluated and recorded, incorrect guess stored via the id in an array of incorrectGuesses
//feedback returnded regarding incorrect or correct
//calculate percetn correct calculate sand returns percentage of correct guesses
//endround - prints collowing : round over! you answered <>% of the quesgtions correctly!
