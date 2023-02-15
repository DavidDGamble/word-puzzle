import React from "react";
import PropTypes from "prop-types";

function WordForm() {
    
    return (
        <React.Fragment>
            <div id="form">
            <form>
                <hr />
                <input id="inputId" type="text" name="guess" maxLength={1} />
                <input id="inputId" type="text" name="guess" maxLength={1} />
                <input id="inputId" type="text" name="guess" maxLength={1} />
                <input id="inputId" type="text" name="guess" maxLength={1} />
                <input id="inputId" type="text" name="guess" maxLength={1} />
                <input id="inputId" type="text" name="guess" maxLength={1} />
                <hr />
                <button type="submit">Geese!</button>
            </form>
            </div>
        </React.Fragment>

    )
}

export default WordForm;