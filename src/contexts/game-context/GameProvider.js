import React, { useState, useEffect } from "react";

//context
import { GameContext } from "./GameContext";

export default function GameProvider({ children }) {
  //state
  const [roomInfo, setRoomInfo] = useState({
    title: "testuser",
    description: "The narrow passage bends here from west to north. The smell of gold permeates the air.",
    players: [
        "somebody",
        "steveo",
        "JTyzzerThaBoss",
        "erik",
        "hood",
    ],
  });

  return (
    <>
      <GameContext.Provider
        value={{
          roomInfo
        }}
      >
        {children}
      </GameContext.Provider>
    </>
  );
}
