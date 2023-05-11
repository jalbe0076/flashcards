const { evaluateGuess } = require('../src/turns');

const createRound = (deck) => {
  return {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  };
};

const takeTurn = (answer, round) => {
  const guess = evaluateGuess(answer, round.currentCard);
  round.turns++;

  if (answer !== round.currentCard.correctAnswer) {
    round.incorrectGuesses.push(round.currentCard.id);
  } 
  
    round.currentCard = round.deck[round.turns];

  return guess;
};

const calculatePercentCorrect = (round) => {
  const turns = round.turns;
  const wrongGuesses = round.incorrectGuesses.length;
  const correctGuesses = turns - wrongGuesses;

  return Math.floor(Math.ceil(correctGuesses / turns * 100));
};

const endRound = (round) => {
  const score = calculatePercentCorrect(round);
  const message = `** Round over! ** You answered ${score}% of the questions correctly!`;
  return message;
};

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
}