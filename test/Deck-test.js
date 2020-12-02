const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is Tater Tots favorite food?', ['chicken', 'tuna', 'carrots'], 'tuna');
    card2 = new Card(2, 'What is Taters worst habit?', ['scratching furniture', 'yowling', 'hissing'], 'scratching furniture');
    card3 = new Card(3, 'What is Tater Tots favorite way to sleep?', ['curled up', 'under the covers', 'upside down'], 'upside down');
    deck = new Deck([card1, card2, card3])
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should accept a list of cards in the deck', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(3);
  });
});
