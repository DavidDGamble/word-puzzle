import React from "react";
import GuessList from "./GuessList";
import WordForm from "./WordForm";
import words from './../words';


class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: this.handleRandomWords(),
      guessList: [],
      reset: false
    };
  }

  switchReset = () => {
    this.setState({ reset: !this.state.reset });
  }

  handleGuess = (guess) => {
    if (this.state.guessList.length < 6) {
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
    } else {
      return;
    }
  };

  // Generates a random word, test array for now, array will have more words after testing
  handleRandomWords = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  // ------------------------------------------------------------------
  
  
  checkWin = () => {
    let guess = this.state.guessList;
    return this.state.currentWord === this.state.guessList[this.state.guessList.length - 1];
  }



  render() {
    console.log(this.state.currentWord);
    let resetBtn = null;
    let status;
    if (this.checkWin()) {
      status = 'WINNER!'
    } else if (this.state.guessList.length >= 6) {
      status = "YOU'RE A GREAT GUY, BUT YOU LOST!"
    }

    return (
      <React.Fragment>
        <p className="statusText">{status}</p>
        <GuessList
          guessList={this.state.guessList} />
        <WordForm
          onGuessClick={this.handleGuess} />
        {resetBtn}
      </React.Fragment>
    )
  };
}

export default GameControl;