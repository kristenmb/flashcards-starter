const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turns');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let game;
  let round;
  let deck;
  let card1;
  let card2;
  let card3;

  beforeEach(() => {
    game = new Game();
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    card1 = new Card(1, 'What is Tater Tots favorite food?', ['chicken', 'tuna', 'carrots'], 'tuna');
    card2 = new Card(2, 'What is Taters worst habit?', ['scratching furniture', 'yowling', 'hissing'], 'scratching furniture');
    card3 = new Card(3, 'What is Tater Tots favorite way to sleep?', ['curled up', 'under the covers', 'upside down'], 'upside down');
  })

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should instantiate an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });
})
