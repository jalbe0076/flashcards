const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');
const { sampleData } = require('./prototype-data');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('turn', function() {
  it('should confirm if the guess is the correct answer', () => {
    const card = createCard(sampleData.id, sampleData.question, sampleData.answers, sampleData.correctAnswer);
    const turn = evaluateGuess("object", card);

    expect(turn).to.equal('correct!');
  });

  it('should confirm if the guess is incorrect', () => {
    const card = createCard(sampleData.id, sampleData.question, sampleData.answers, sampleData.correctAnswer);
    const turn = evaluateGuess("array", card);

    expect(turn).to.equal('incorrect!');
  });
});