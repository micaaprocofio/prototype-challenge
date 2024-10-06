import './Instructions.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoap, faJugDetergent, faLemon, faBottleDroplet} from '@fortawesome/free-solid-svg-icons';



function Instractions() {
  return (
    <div className="instructions_container" >
            <div class="row">
                <div class="col-md-12" id="content">
                    <h1 className="intructions_title">INSTRUCTIONS</h1>
                    <div className="instructions_info">
                        <p className="game_info">
                            Control the trash bin using the arrow keys to catch the objects falling 
                            from the sky and prevent them from landing in the water. Each object you catch affects 
                            the water's pH in a different way, and your mission is to keep it within a healthy range, 
                            avoiding imbalances that could harm the aquatic ecosystem.
                        </p>
                        <img src="/robot.png" height="200"/>

                    </div>

                    <div className="game_mecanic">
                        <h2 id="game_mecanics_title">Game Mechanics</h2>

                        <div className="rules_objects">
                            <div class="rules">
                                <h3 id="rules"> Rules</h3>
                                <ul className="items">
                                    <li> The pH of the water must be kept between 6.5 and 8.5.</li>
                                    <li> If the pH goes out of the range, the game ends</li>
                                    <li> The pH of the water is affected by the objects that fall into it. </li>
                                </ul>
                            </div>
                            <div class="objects">
                                <h3 id="object_title">Falling Objects </h3>
                                <ul className="items icons">
                                    <li className="item_icons">Objects that Increase pH: 
                                        <ul>
                                            
                                            <li> <FontAwesomeIcon icon={faLemon} style={{color: "#FFD43B", fontSize: "22px"}}  /> Limon</li>
                                            <li><FontAwesomeIcon icon={faBottleDroplet} style={{color: "#b1dd8c"}} className="icon"/> Vinegar</li>

                                        </ul>
                                    </li>
                                    <li className="item_icons" >Objects that Decrease pH: 
                                        <ul>
                                            <li style={{  margin: "10px 0 " }}><FontAwesomeIcon icon={faSoap} style={{ color: "#f7abcd", marginLeft: "5px" }} className="icon" /> Soap</li>
                                            <li> <FontAwesomeIcon icon={faJugDetergent} style={{color: "#0433ff"}} className="icon"/> Bleach</li>

                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="controls">
                        <h2>Controls</h2>
                            <ul className="control_items">
                                <li>
                                    Move Left:  <i className="bi bi-arrow-left-square"></i> Left Arrow key on the keyboard.

                                </li>
                                <li>
                                    Move Right:  <i className="bi bi-arrow-right-square"></i> Right Arrow key on the keyboard.
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default Instractions;

{/* <div className="game_mecanic">
                    <h2 id="game_mecanics_title">Game Mechanics</h2>
                        <h3 id="rules"> Rules</h3>
                            <ul className="items">
                                <li> The pH of the water must be kept between 6.5 and 8.5.</li>
                                <li> If the pH goes out of the range, the game ends</li>
                                <li> The pH of the water is affected by the objects that fall into it. </li>
                            </ul>
                            <h3>Falling Objects: </h3>
                            <ul className="items">
                                <li className="itmes_icons">Objects that Increase pH: 
                                    <ul>
                                        
                                        <li> <FontAwesomeIcon icon={faLemon} style={{color: "#FFD43B", fontSize: "22px"}}  /> Limon</li>
                                        <li><FontAwesomeIcon icon={faBottleDroplet} style={{color: "#b1dd8c"}} className="icon"/> Vinegar</li>

                                    </ul>
                                </li>
                                <li className="itmes_icons" >Objects that Decrease pH: 
                                    <ul>
                                        <li style={{  margin: "10px 0 " }}><FontAwesomeIcon icon={faSoap} style={{ color: "#f7abcd", marginLeft: "5px" }} className="icon" /> Soap</li>
                                        <li> <FontAwesomeIcon icon={faJugDetergent} style={{color: "#0433ff"}} className="icon"/> Bleach</li>

                                    </ul>
                                </li>
                            </ul>
                        

                </div> */}