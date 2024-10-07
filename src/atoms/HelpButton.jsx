import { useState } from 'react';
import { GenericPage } from '../componentes/PausePage/GenericPage';

export function HelpButton({ pauseGame, resumeGame }) {
    const [instructions, setInstructions] = useState(false);

    function ButtonClick() {
        setInstructions((prevState) => !prevState);
        if (!instructions) {
            pauseGame();
        } else {
            resumeGame();
        }
    }

    return (
        <div>
            {!instructions && <button onClick={ButtonClick}>?</button>}
            {instructions && <GenericPage closePage={ButtonClick} />}
        </div>
    );
}