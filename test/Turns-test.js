const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turns');
const Card = require('../src/Card');


describe('Turn', () => {
  let card;
  let card2;
  let turn;
  let turn2;

  beforeEach(() => {
    card = new Card(1, 'What is Tater Tots favorite food?', ['chicken', 'tuna', 'carrots'], 'tuna');
    card2 = new Card(2, 'What is Taters worst habit?', ['scratching furniture', 'yowling', 'hissing'], 'scratching furniture');
    turn = new Turn('tuna', card);
    turn2 = new Turn('yowling', card2);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a users guess', () => {
    expect(turn.userGuess).to.equal('tuna');
  });

  it('should only take a string for the guess', () => {
    expect(turn.userGuess).to.be.a('string');
  });

  it('should also take in the current card', () => {
    expect(turn.currentCard).to.equal(card);
  });

  it('should return the guess', () => {
    expect(turn.returnGuess()).to.equal('tuna');
  });

  it('should return the current card', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should check to see if the users guess is correct', () => {
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should tell the user if their guess is correct or not', () => {
    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.equal('correct!');

    turn2.evaluateGuess();
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
