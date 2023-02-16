import React from "react";
import GuessList from "./GuessList";
import WordForm from "./WordForm";
// import PropTypes from "prop-types";


class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: "booger",
      guessList: [],
    };
  }

  handleGuess = (guess) => {
    const currWord = this.state.currentWord;
    let newGuess = [];

    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === currWord[i]) {
        newGuess.push(guess[i]);
      } else {
        newGuess.push('0');
      }
    }

    const newGuessList = this.state.guessList.concat([newGuess.join('')]);
    this.setState({ guessList: newGuessList });
  };

  checkWin = () => {
    let guess = this.state.guessList;
    return this.state.currentWord === this.state.guessList[this.state.guessList.length - 1];
  }

  render() {
    let status;
console.log(this.state.guessList);
    if (this.checkWin()) {
      status = 'WINNER!'
    } else if (this.state.guessList.length >= 6) { 
      status = 'LOSER!'
    }

    return (
      <React.Fragment>
        <p>{status}</p>
        <GuessList
          guessList={this.state.guessList} />
        <WordForm 
          onGuessClick={this.handleGuess}/>
      </React.Fragment>
    )
  };
}

export default GameControl;