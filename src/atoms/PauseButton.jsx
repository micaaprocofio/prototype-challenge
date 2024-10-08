import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import "../atoms/PauseButton.css"; 

export const PauseButton = ({ onClick, isPaused }) => {
    return (
        <button 
            id='pausa' 
            onClick={onClick} 
            style={{ background: 'transparent', border: 'none', padding: 0 }}
        >
            <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
        </button>
    );
};