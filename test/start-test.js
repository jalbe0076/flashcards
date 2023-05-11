const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { deckPile } = require('../src/game');
const { sampleData } = require('./sample-data');

describe('start', () => {
  let card1, card2, card3, questionsList;

  beforeEach(() => {
    card1 = createCard(sampleData[0].id, sampleData[0].question, sampleData[0].answers, sampleData[0].correctAnswer);
    card2 = createCard(sampleData[1].id, sampleData[1].question, sampleData[1].answers, sampleData[1].correctAnswer);
    card3 = createCard(sampleData[2].id, sampleData[2].question, sampleData[2].answers, sampleData[2].correctAnswer);

    questionsList = [card1, card2, card3];
  });

  it('should create cards and add them to a deck', () => {
    const deck = deckPile(questionsList);

    expect(deck).to.be.a('array')
    expect(deck).to.deep.equal([card1, card2, card3])
  });
});