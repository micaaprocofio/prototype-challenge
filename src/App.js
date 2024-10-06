import logo from './logo.svg';
import './App.css';
import Instructions from './componentes/Instructions/Instructions.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './componentes/Game/Game';

function App() {
  return (
  
    <Router>
        <div className="App">

      <header className="App-header">
      <Game/>
      </header>
    </div>
    </Router>
  );
}

export default App;

