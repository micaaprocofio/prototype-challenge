import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Main.css';
import Instructions from '../Instructions/Instructions.jsx';
import Game from '../Game/Game.jsx';

function Main() {
    const [showPopup, setShowPopup] = useState(false);
    const [game, setGame] = useState(false);
    const [information, setInformation] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const toggleGame = () => {
        setGame(!game);
    };

    const toggleInformation = () => {
        setInformation(!information);
    };

    return(
        <container className="container-fluid">
            { information && (
                <div>
                    <div className='mt-3 close-btn-container'>
                        <button className='close-btn' onClick={toggleInformation}>Close</button>
                    </div>
                </div>
            ) }
            {game && (   
                <div>
                    <Game/>
                    <div className='mt-3 close-btn-container'>
                        <button className='close-btn' onClick={toggleGame}>Close</button>
                    </div>
                </div>
                
            )}
            {!game && !information && (
                 <div>
                    <h1 className='menu-title d-flex flex-row justify-content-center align-items-center'>GAME</h1>
                    <div className='main-menu'>
                        <div className='mb-3 d-flex flex-row justify-content-center align-items-center'>
                            <button className={`menu-btn`} onClick={toggleGame}>PLAY</button>
                        </div>
                        <div className='mb-3 d-flex flex-row justify-content-center align-items-center'>
                            <button className={`menu-btn`}  onClick={togglePopup} >INSTRUCTIONS</button>
                        </div>
                        <div className='mb-3 d-flex flex-row justify-content-center align-items-center'>
                            <button className={`menu-btn`} onClick={toggleInformation}>INFORMATION</button>
                        </div>
                    </div>
                    <div>
                        {showPopup && (
                        <div className="popup">
                            <div className="popup-inner">
                                <Instructions/>
                                <div className='close-btn-container'>
                                    <button className='close-btn' onClick={togglePopup}>Close</button>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                 </div>   
                )
            }

            
        </container>
    ); 
  }
 
  export default Main;
  
