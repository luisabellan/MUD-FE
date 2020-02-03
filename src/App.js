import React from 'react';
import './App.css';

//context
import GameProvider from './contexts/game-context/GameProvider'
import PlayerProvider from './contexts/player-context/PlayerProvider'

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GameProvider>
        <PlayerProvider>

        
        </PlayerProvider>
      </GameProvider>
    </Router>
  );
}

export default App;
