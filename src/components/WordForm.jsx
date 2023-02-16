import React from "react";
import PropTypes from "prop-types";

function WordForm(props) {
    // const { onGuessClick } = props;

    function handleGuessSubmit(event) {
        event.preventDefault();
        props.onGuessClick([
            event.target.guess1.value,
            event.target.guess2.value,
            event.target.guess3.value,
            event.target.guess4.value,
            event.target.guess5.value,
            event.target.guess6.value
        ]);
    }

    return (    
        <React.Fragment>
            <div id="form">
                <form onSubmit={handleGuessSubmit}>
                    <hr />
                    <input id="inputId" type="text" name="guess1" maxLength={1} />
                    <input id="inputId" type="text" name="guess2" maxLength={1} />
                    <input id="inputId" type="text" name="guess3" maxLength={1} />
                    <input id="inputId" type="text" name="guess4" maxLength={1} />
                    <input id="inputId" type="text" name="guess5" maxLength={1} />
                    <input id="inputId" type="text" name="guess6" maxLength={1} />
                    <hr />
                    <button type="submit">Geese!</button>
                </form>
            </div>
        </React.Fragment>

    )
} 

WordForm.propTypes = {
    onGuessClick: PropTypes.func
}

export default WordForm;