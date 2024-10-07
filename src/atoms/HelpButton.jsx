import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Instructions from '../componentes/Instructions/Instructions.jsx';

export function HelpButton() {
    
    const [instructions, setinstructions] = useState(false);


    function ClickedHelp()
    {
        if (!instructions){

            setinstructions = true;
            
            <Instructions/> //ver bien como era la bandera booleana y que no se repita indefinidamente el componente ademas de pausar la partida (ver eso antes)

        } 
    }

    return(

        <button onClick = {ClickedHelp}>?</button>

    );
}