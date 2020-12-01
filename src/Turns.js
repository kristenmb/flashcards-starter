class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.userGuess;
  }

}

module.exports = Turn;



//returnGuess
//returnCard
//evaluateGuess
//giveFeedback
