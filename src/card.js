const createCard = (id, question, answers, correctAnswer) => {
  return {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  };
}

const evaluateGuess = (guess, card) => {
  if (guess === card.correctAnswer) {
    return 'correct!';
  }
  return 'incorrect!';
}

module.exports = {
  createCard, 
  evaluateGuess,
}