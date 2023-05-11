const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const { sampleData } = require('./sample-data');

describe('deck', () => {
  let card1, card2, card3, deck;

  beforeEach(() => {
    card1 = createCard(sampleData[0].id, sampleData[0].question, sampleData[0].answers, sampleData[0].correctAnswer);
    card2 = createCard(sampleData[1].id, sampleData[1].question, sampleData[1].answers, sampleData[1].correctAnswer);
    card3 = createCard(sampleData[2].id, sampleData[2].question, sampleData[2].answers, sampleData[2].correctAnswer);

    deck = createDeck([card1, card2, card3]);
  });

  it('should be able to create a card deck', () => {
    expect(deck).to.be.a('array');
  });

  it('should be able to count the cards in a deck', () => {
    const numberOfCards = countCards(deck);
    
    expect(numberOfCards).to.equal(3);
  });
});