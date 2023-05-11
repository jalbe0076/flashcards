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

module.exports = { printMessage, printQuestion, start };
