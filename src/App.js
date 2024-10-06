import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './componentes/Main/Main';
import './index.css';
import WaterModal from './componentes/WaterModal/WaterModal';

function App() {
  return ( 
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="col-md-12">
          <WaterModal/> 
          <Main/>       
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
