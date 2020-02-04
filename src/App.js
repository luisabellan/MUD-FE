import React from 'react';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';

//context
import GameProvider from './contexts/game-context/GameProvider'
import PlayerProvider from './contexts/player-context/PlayerProvider'

//components
import GameView from './components/game-components/GameView'

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Registration/> */}
      <Login/>
      <GameProvider>
        <PlayerProvider>
            <GameView/> 
        </PlayerProvider>
      </GameProvider>
    </Router>
  );
}

export default App;
