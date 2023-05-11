const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { sampleData } = require('./sample-data');

describe('round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = createCard(sampleData[0].id, sampleData[0].question, sampleData[0].answers, sampleData[0].correctAnswer);
    card2 = createCard(sampleData[1].id, sampleData[1].question, sampleData[1].answers, sampleData[1].correctAnswer);
    card3 = createCard(sampleData[2].id, sampleData[2].question, sampleData[2].answers, sampleData[2].correctAnswer);
    
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  });

  it('should be an object that holds onto the deck', () => {
    expect(round.deck).to.equal(deck);
  });

  it('the current card should be the first card in the deck', () => {
    expect(round.currentCard).to.equal(deck[0]);
  });

  it('should have the turn start at 0', () => {
    expect(round.turns).to.equal(0);
  });

  it('should have an incorrect guess list', () => {
     expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should take turns', () => {
    takeTurn('object', round);
    expect(round.turns).to.equal(1);
  });

  it('should pass the card id to a list of incorrect guesses', () => {
    const turn = takeTurn('array', round);

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should change the current card to the next one in the deck', () => {
    takeTurn('object', round);
    expect(round.currentCard).to.deep.equal(card2);
  });

  it('should check if the guess is correct or incorrect', () => {
    const turn = takeTurn('object', round);
    const turn2 = takeTurn('accessor method', round);

    expect(turn).to.equal(`correct!`);
    expect(turn2).to.equal(`incorrect!`);
  });

  it('should calculate the percentage of correct guesses', () => {
    takeTurn('object', round);
    takeTurn('mutator method', round);
    takeTurn('accessor method', round);

    const score = calculatePercentCorrect(round);

    expect(score).to.equal(67);
  });

  it('should provide a message at the end of a round', () => {
    takeTurn('object', round);
    takeTurn('mutator method', round);
    takeTurn('accessor method', round);

    calculatePercentCorrect(round);

    const finish = endRound(round);

    expect(round.turns).to.equal(3);
    expect(finish).to.equal('** Round over! ** You answered 67% of the questions correctly!')
  });
});