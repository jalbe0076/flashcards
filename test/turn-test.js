const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/turns');
const { sampleData } = require('./sample-data');

describe('turn', () => {
  let card;

  beforeEach(() => {
    card = createCard(sampleData[0].id, sampleData[0].question, sampleData[0].answers, sampleData[0].correctAnswer);
  });

  it('should confirm if the guess is the correct answer', () => {
    const turn = evaluateGuess("object", card);

    expect(turn).to.equal('correct!');
  });

  it('should confirm if the guess is incorrect', () => {
    const turn = evaluateGuess("array", card);

    expect(turn).to.equal('incorrect!');
  });
});