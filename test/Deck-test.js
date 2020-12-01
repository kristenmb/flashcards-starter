const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should accept a list of cards in the deck', function() {
    const card1 = new Card(1, 'What is Tater Tots favorite food?', ['chicken', 'tuna', 'carrots'], 'tuna');
    const card2 = new Card(2, 'What is Taters worst habit?', ['scratching furniture', 'yowling', 'hissing'], 'scratching furniture');
    const card3 = new Card(3, 'What is Tater Tots favorite way to sleep?', ['curled up', 'under the covers', 'upside down'], 'upside down');

    const deck = new Deck([card1, card2, card3])

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in the deck', function() {
    const card1 = new Card(1, 'What is Tater Tots favorite food?', ['chicken', 'tuna', 'carrots'], 'tuna');
    const card2 = new Card(2, 'What is Taters worst habit?', ['scratching furniture', 'yowling', 'hissing'], 'scratching furniture');
    const card3 = new Card(3, 'What is Tater Tots favorite way to sleep?', ['curled up', 'under the covers', 'upside down'], 'upside down');

    const deck = new Deck([card1, card2, card3])

    expect(deck.countCards()).to.equal(3);
  })
  //expect array length to be 3
});
