const createCard = (id, question, answers, correctAnswer) => {
  return {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  };
};

const evaluateGuess = (guess, card) => {
  if (guess === card.correctAnswer) {
    return 'correct!';
  }
  return 'incorrect!';
};

const createDeck = (deck) => {
  return deck;
};

const countCards = (deck) => {
  return deck.length;
}

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
  if (round.turns === round.deck.length) {
    return `** Round over! ** You answered ${score}% of the questions correctly!`;
  }
};

module.exports = {
  createCard, 
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
}