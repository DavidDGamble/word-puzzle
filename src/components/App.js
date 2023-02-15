import React from 'react';
import Header from "./Header";
// import GameControl from './GameControl';
import WordForm from './WordForm';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <WordForm />
      {/* <GameControl /> */}
    </React.Fragment>
  );
}

export default App;
