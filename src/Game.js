const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
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

    this.printMessage(deck);
    this.printQuestion(round);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
