import React from 'react';

export const PauseButton = ({ onClick, isPaused }) => {
    return (
        <button onClick={onClick}>
            {isPaused ? 'Paused' : 'Pause'}
        </button>
    );
};
