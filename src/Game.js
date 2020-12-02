const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turns');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {
    const allCards = prototypeQuestions.map(cardData => {
      let card = new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer)
      return card
    });
    let deck = new Deck(allCards);
    this.currentRound = new Round(deck);
    let round = this.currentRound;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;


// Your Game class should meet these other requirements:
//
// start: method that starts everything
// Creates Cards
// Puts Cards in a Deck
// Creates a new Round using the Deck
// invokes printMessage to display the message in the CLI
// invokes printQuestion to kick off our helper functions that allow interaction via the CLI
// Note: The helper functions are all fleshed out and fit to work with classes/methods that meet the requirements in the past iterations.
// game.currentRound; // => Round {...} (The new Round object that has been instatiated)
