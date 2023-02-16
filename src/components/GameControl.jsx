import React from "react";
import GuessList from "./GuessList";
import WordForm from "./WordForm";
import words from './../words';


class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: this.handleRandomWords(),
      guessList: []
    };
  }

  handleNewWord = () => {
    const newCurrWord = this.handleRandomWords();
    this.setState({ 
      currentWord: newCurrWord,
      guessList: []
    });
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
    // console.log(this.state.currentWord);
    let resetBtn = null;
    let status = null;
    let currWord = null;
    if (this.checkWin()) {
      status = 'WINNER!'
      resetBtn = <button className="reset-btn" onClick={this.handleNewWord}>New Word</button>
    } else if (this.state.guessList.length >= 6) {
      status = "YOU'RE A GREAT GUY, BUT YOU LOST!"
      currWord = this.state.currentWord;
      resetBtn = <button className="reset-btn" onClick={this.handleNewWord}>New Word</button>
    }

    return (
      <React.Fragment>
        <p className="statusText">{status}</p>
        <p className="curr-word">{currWord}</p>
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