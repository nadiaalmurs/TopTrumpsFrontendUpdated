import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import CardsContainer from './containers/CardsContainer';
import HomeContainer from './containers/HomeContainer';
import InstructionsContainer from './containers/InstructionsContainer';
import PlayContainer from './containers/PlayContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeContainer/>}></Route>
          <Route path="/cards" element={<CardsContainer/>}></Route>
          <Route path="/instructions" element={<InstructionsContainer/>}></Route>
          <Route path="/play" element={<PlayContainer/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
