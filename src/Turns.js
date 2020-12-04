class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard;
    this.isCorrect = false;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if (this.userGuess === this.currentCard.correctAnswer) {
      this.isCorrect = true;
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.isCorrect) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn;



//giveFeedback - giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
