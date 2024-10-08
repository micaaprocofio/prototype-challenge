import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'; // Corrected import
import "../atoms/PauseButton.css"; 

export const PauseButton = ({ onClick, isPaused }) => {
    return (
        
            <button 
                id='pause' 
                onClick={onClick} 
            >
                <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
            </button>
            
    );
};