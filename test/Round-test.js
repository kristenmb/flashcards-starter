const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turns');
const Round = require('../src/Round');

describe('Round', () => {

  it('should instantiate Round', () => {
    const round = new Round();
  });

  it('should return the current card being played', () => {
    const card1 = new Card(1, 'What is Tater Tots favorite food?', ['chicken', 'tuna', 'carrots'], 'tuna');
    const card2 = new Card(2, 'What is Taters worst habit?', ['scratching furniture', 'yowling', 'hissing'], 'scratching furniture');
    const card3 = new Card(3, 'What is Tater Tots favorite way to sleep?', ['curled up', 'under the covers', 'upside down'], 'upside down');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

});
