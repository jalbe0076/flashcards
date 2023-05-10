const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck } = require('../src/card');
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

describe('turn', () => {
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

describe('deck', () => {
  it('should be able to create a card deck', () => {
    const card1 = createCard(sampleData[0].id, sampleData[0].question, sampleData[0].answers, sampleData[0].correctAnswer);
    const card2 = createCard(sampleData[1].id, sampleData[1].question, sampleData[1].answers, sampleData[1].correctAnswer);
    const card3 = createCard(sampleData[2].id, sampleData[2].question, sampleData[2].answers, sampleData[2].correctAnswer);

    const deck = createDeck([card1, card2, card3]);

    expect(deck).to.have.lengthOf(3);
  });
});

describe('round', () => {
  it('should be an object that holds onto the deck', () => {
    const card1 = createCard(sampleData[0].id, sampleData[0].question, sampleData[0].answers, sampleData[0].correctAnswer);
    const card2 = createCard(sampleData[1].id, sampleData[1].question, sampleData[1].answers, sampleData[1].correctAnswer);
    const card3 = createCard(sampleData[2].id, sampleData[2].question, sampleData[2].answers, sampleData[2].correctAnswer);
    
    const deck = createDeck([card1, card2, card3]);

    const round = createRound(deck);

    expect(round.deck).to.deep.equal(deck);
  });
});
