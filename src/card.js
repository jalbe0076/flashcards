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

const createRound = (deck) => {
  return {
    deck: deck
  };
}

module.exports = {
  createCard, 
  evaluateGuess,
  createDeck,
  createRound,
}