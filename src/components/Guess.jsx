import React from "react";
import PropTypes from "prop-types";

function Guess(props) {
    return (
        <div className="guess">
            <p className="1">{props.one}</p>
            <p className="2">{props.two}</p>
            <p className="3">{props.three}</p>
            <p className="4">{props.four}</p>
            <p className="5">{props.five}</p>
            <p className="6">{props.six}</p>
        </div>        
    )
};

Guess.propTypes = {
    one: PropTypes.string,
    two: PropTypes.string,
    three: PropTypes.string,
    four: PropTypes.string,
    five: PropTypes.string,
    six: PropTypes.string
}

export default Guess;