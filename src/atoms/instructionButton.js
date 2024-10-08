import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'; // Corrected import
import "../atoms/PauseButton.css"; 

export const InstructionButton = ({ onClickInstruction, information}) => {
    return (
            <button
                id='instructions' 
                onClick={onClickInstruction} 
            >
                <FontAwesomeIcon icon={faCircleInfo} />
            </button>
      
    );
};