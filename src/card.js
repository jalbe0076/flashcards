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

module.exports = {
  createCard, 
  evaluateGuess,
  createDeck,
  createRound,
  takeTurn,
}