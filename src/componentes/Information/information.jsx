import 'bootstrap/dist/css/bootstrap.min.css';
import './information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faEarthAmericas, faDroplet, faBullseye,faQuestion } from '@fortawesome/free-solid-svg-icons';

export default function InformationPage() {

    return (
        <div className = "information-container">
          <h1 className="information-title" style={{ color: "#10506b"}}>
            INFORMATION
          </h1>
          <div className="mb-8 card">
            <h2 className = "information-second-title" ><FontAwesomeIcon icon={faEarthAmericas} flip style={{color: "#0433FF", fontSize: "22px"}}/> GLOBE Protocols: Science at Your Fingertips!</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            GLOBE Protocols are innovative procedures for collecting scientific data about the environment, organized around Earth's spheres: atmosphere, biosphere, hydrosphere, and pedosphere. 
            Sponsored by NASA, these protocols promote scientific education and collaborative research on a global scale. From measuring air temperature to analyzing water pH and soil moisture, each protocol utilizes specific instruments that meet rigorous GLOBE standards. 
            Join us in becoming a champion for our planet!
            </p>
          </div>
          <div className="mb-8 card">
            <h2 className = "information-second-title"><FontAwesomeIcon icon={faDroplet} bounce style={{color: "#78b4e2", fontSize: "22px"}}/> Hydrosphere: Monitor and Understand Our Water Bodies!</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            The hydrosphere encompasses all of Earth’s surface waters, including rivers, lakes, streams, and coastal areas. 
            Through GLOBE research in this sphere, we can monitor and comprehend the conditions of these vital waters, observing how they change throughout the year and over time. 
            With protocols that include measuring water pH and temperature, we are equipped to protect and preserve this essential resource. Dive into the hydrosphere and be part of the change!
            </p>
          </div>
          <div className="mb-8 card">
            <h2 className = "information-second-title" ><FontAwesomeIcon icon={faTemperatureHalf} style={{color: "#008000", fontSize: "22px"}} />  pH: The Key to Understanding Our Ecosystems!</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            pH is a fundamental measure that indicates the acidity or alkalinity of a solution, based on the concentration of hydrogen ions. 
            On a scale from 0 to 14, where 7 is neutral, solutions with a pH less than 7 are considered acidic, while those above 7 are alkaline. Understanding pH is crucial for deciphering the chemistry of water and its impact on the life that depends on it. 
            Explore the world of pH and discover its significance in the ecosystem!
            </p>
          </div>
          <div className="mb-8 card">
            <h2 className = "information-second-title" ><FontAwesomeIcon icon={faBullseye} style={{color: "#fb4b4b", fontSize: "22px"}}/> Our Mission: Environmental Awareness Through Play!</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Our goal is to create a simple and accessible game that, supported by GLOBE's information and protocols on the hydrosphere, raises public awareness about the importance of this vital resource. 
            Through an engaging gameplay experience, we aim to encourage reflection on the state of Earth's surface waters and the need for their conservation. Play, learn, and take action!
            </p>
          </div>
          <div className="mb-8 card">
            <h2 className = "information-second-title" ><FontAwesomeIcon icon={faQuestion} shake style={{color: "#e7ca08", fontSize: "22px"}} /> Why We Chose This Game?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            We believe this approach is an attractive proposal to achieve our goal of raising user awareness about the environment and GLOBE protocols, particularly concerning the hydrosphere. 
            While primarily geared towards a child audience, we’ve designed the game to keep its message and purpose relevant and effective for users of all ages. Join the fun and contribute to a more sustainable future!
            </p>
          </div>
      </div>
    
    );
  }