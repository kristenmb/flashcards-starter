const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should instantiate an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start with no current rounds', () => {
    expect(game.currentRound).to.deep.equal({});
  });

  it('should keep track of the current round', () => {
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it.skip('should be able to put cards in a deck', () => {

  });

  it.skip('should be able to create a new round using the deck', () => {

  });
})
