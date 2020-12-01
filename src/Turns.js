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
    switch (this.userGuess) {
      case this.currentCard.correctAnswer:
      this.isCorrect = true;
      return true;
      break;
      default:
      return false;
    }
  }

  giveFeedback() {
    switch (this.isCorrect) {
      case true:
        return 'correct!'
        break;
      default:
        return 'incorrect!'
    }
  }
}

module.exports = Turn;



//giveFeedback - giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
