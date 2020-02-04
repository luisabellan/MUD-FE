import React from 'react';
import './App.css';

import AppRouter from './components/AppRouter';

//context
import GameProvider from './contexts/game-context/GameProvider'
import PlayerProvider from './contexts/player-context/PlayerProvider'

//components
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (

    <Router>
     
      <GameProvider>
        <PlayerProvider>   
          <div className="App">
            <AppRouter/>
          </div>
        </PlayerProvider>
      </GameProvider>
    </Router>

  );
}

export default App;
