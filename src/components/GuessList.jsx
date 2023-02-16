import React from "react";
import Guess from "./Guess";
import PropTypes from "prop-types";

function GuessList(props) {
    return (
        <React.Fragment>
             {props.guessList.map((guess) =>
                <Guess 
                    one={guess[0] != '0' ? guess[0] : '-'}
                    two={guess[1] != '0' ? guess[1] : '-'}
                    three={guess[2] != '0' ? guess[2] : '-'}
                    four={guess[3] != '0' ? guess[3] : '-'}
                    five={guess[4] != '0' ? guess[4] : '-'}
                    six={guess[5] != '0' ? guess[5] : '-'} />
             )}

        </React.Fragment>
    )
}

GuessList.propTypes = {
    guessList: PropTypes.array
}

export default GuessList;