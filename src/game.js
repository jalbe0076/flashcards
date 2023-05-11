const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard, } = require('./card');
const { createDeck, countCards } = require('./deck'); 
const { createRound } = require('./round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

const deckPile = (questionsList) => {
  const cards = questionsList.map(card => createCard(card.id, card.question, card.answers, card.correctAnswer));
  return createDeck(cards);
}; 

const start = () => {
  const deck = deckPile(prototypeQuestions);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}

module.exports = { printMessage, printQuestion, start, deckPile };
