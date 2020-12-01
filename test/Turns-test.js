const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turns');
const Card = require('../src/Card');


describe('Turn', () => {

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a users guess', () => {
    const turn = new Turn('answer');
    expect(turn.userGuess).to.equal('answer');
  });

  it('should only take a string for the guess', () => {
    const turn = new Turn('answer');
    expect(turn.userGuess).to.be.a('string');
  });

  it('should also take in the current card', () => {
    const card = new Card();
    const turn = new Turn('answer', card);
    expect(turn.currentCard).to.equal(card);
  });

  it('should return the guess', () => {
    const card = new Card();
    const turn = new Turn('answer', card);
    expect(turn.returnGuess()).to.equal('answer');
  });

  it('should return the current card', () => {
    const card = new Card();
    const turn = new Turn('answer', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should check to see if the users guess is correct', () => {
    const card = new Card(1, 'What is Tater Tots favorite food?', ['chicken', 'tuna', 'carrots'], 'tuna');
    const turn = new Turn('tuna', card);

    const card2 = new Card(2, 'What is Taters worst habit?', ['scratching furniture', 'yowling', 'hissing'], 'scratching furniture');
    const turn2 = new Turn('yowling', card2);

    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should tell the user if their guess is correct or not', () => {
    const card = new Card(1, 'What is Tater Tots favorite food?', ['chicken', 'tuna', 'carrots'], 'tuna');
    const turn = new Turn('tuna', card);

    const card2 = new Card(2, 'What is Taters worst habit?', ['scratching furniture', 'yowling', 'hissing'], 'scratching furniture');
    const turn2 = new Turn('yowling', card2);

    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.equal('correct!');

    turn2.evaluateGuess();
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
