import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './componentes/Game/Game';

function App() {
  return (
  
    <Router>
        <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Game />}>
          
        </Route>
      </Routes>
      </header>
    </div>
    </Router>
  );
}



export default App;
