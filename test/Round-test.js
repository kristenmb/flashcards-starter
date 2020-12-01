const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turns');
const Round = require('../src/Round');

describe('Round', () => {
  let deck;
  let round;
  let card1;
  let card2;
  let card3;

  beforeEach(() => {
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    card1 = new Card(1, 'What is Tater Tots favorite food?', ['chicken', 'tuna', 'carrots'], 'tuna');
    card2 = new Card(2, 'What is Taters worst habit?', ['scratching furniture', 'yowling', 'hissing'], 'scratching furniture');
    card3 = new Card(3, 'What is Tater Tots favorite way to sleep?', ['curled up', 'under the covers', 'upside down'], 'upside down');
  })

  it('should instantiate Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card being played', () => {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should update the turn count after each guess', () => {
    round.takeTurn('tuna');
    expect(round.turn).to.equal(1);
  });

  it('should replace current card with the next card after a guess is submitted', () => {
    round.takeTurn('tuna');
    expect(round.returnCurrentCard()).to.deep.equal(card2);
  });

  it('should evalute the guess and store incorrect guesses', () => {
    round.takeTurn('chicken');
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('should give feedback about the guess', () => {
    round.takeTurn('chicken');
    expect(round.takeTurn('chicken')).to.equal('incorrect!')
  });

  it('should calculate the percentage of correct guesses', () => {
    round.takeTurn('tuna');
    round.takeTurn('yowling');
    round.takeTurn('upside down');

    round.calculatePercentage();
    expect(round.calculatePercentage()).to.equal(66)
  });

  it('should announce the end of the round', () => {
    round.takeTurn('tuna');
    round.takeTurn('yowling');
    round.takeTurn('upside down');
    round.calculatePercentage();
    round.endRound();
    expect(round.endRound()).to.equal('*Round over!* You answered 66% of the questions correctly!');
  });

});
