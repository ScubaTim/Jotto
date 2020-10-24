import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    return (
        <div data-test="component-guessedWords">
            <h2>Guessed Words Component</h2>
        </div>
    )
}

GuessedWords.propTypes = {
    success: PropTypes.bool.isRequired
};

export default GuessedWords;
