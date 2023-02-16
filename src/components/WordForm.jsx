import React from "react";
import PropTypes from "prop-types";

function WordForm(props) {

  function handleGuessSubmit(event) {
    event.preventDefault();
    props.onGuessClick([
      event.target.guessx1.value,
      event.target.guessx2.value,
      event.target.guessx3.value,
      event.target.guessx4.value,
      event.target.guessx5.value,
      event.target.guessx6.value
    ]);
    event.target.guessx1.value = '';
    event.target.guessx2.value = '';
    event.target.guessx3.value = '';
    event.target.guessx4.value = '';
    event.target.guessx5.value = '';
    event.target.guessx6.value = '';
    event.target.guessx1.focus();
  }

  const handleChange = e => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("x");
  
    // Check if they hit the max character length
    if (value.length >= maxLength) {
      // Check if it's not the last input field
      if (parseInt(fieldIndex, 10) < 7) {
        // Get the next input field
        const nextSibling = document.querySelector(
          `input[name=guessx${parseInt(fieldIndex, 10) + 1}]`
        );
  
        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }
  }



  return (
    <React.Fragment>
      <div id="form">
        <form onSubmit={handleGuessSubmit}>
          <hr />
          <input id="inputId" type="text" name="guessx1" maxLength={1} onChange={handleChange} />
          <input id="inputId" type="text" name="guessx2" maxLength={1} onChange={handleChange} />
          <input id="inputId" type="text" name="guessx3" maxLength={1} onChange={handleChange} />
          <input id="inputId" type="text" name="guessx4" maxLength={1} onChange={handleChange} />
          <input id="inputId" type="text" name="guessx5" maxLength={1} onChange={handleChange} />
          <input id="inputId" type="text" name="guessx6" maxLength={1} onChange={handleChange} />
          <hr />
          <button type="submit">Guess!</button>
        </form>
      </div>
    </React.Fragment>
  )
  }

WordForm.propTypes = {
  onGuessClick: PropTypes.func
}

export default WordForm;