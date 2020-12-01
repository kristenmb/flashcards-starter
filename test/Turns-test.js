const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turns');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a users guess', function() {
    const turn = new Turn('typed answer');
    expect(turn.userGuess).to.equal('typed answer');
  });

  it('should also take in the current card', function() {
    const card = new Card();
    const turn = new Turn('typed answer', card);
    expect(turn.currentCard).to.equal(card);
  });

  it('should return the guess', function () {
    const card = new Card();
    const turn = new Turn('typed answer', card);
    expect(turn.returnGuess()).to.equal('typed answer');
  });
});
