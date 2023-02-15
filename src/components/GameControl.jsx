import React from "react";
import WordForm from "./WordForm";
// import PropTypes from "prop-types";


class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: "booger",
      guess: [],
      guessCount: 0,
      won: false
    };
  }

  handleGuess = (guess) => {
    const newGuess = this.state.guessCount++;
    this.setState({
      guess: guess.split(''),
      guessCount: newGuess
    });
  };

  render() {
    return (
      <React.Fragment>
        <WordForm />
      </React.Fragment>
    )
  };

  checkWord = () => {
    const currWord = this.state.currentWord;
    const guess = this.state.guess;

    
  }
}

export default GameControl;