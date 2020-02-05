import React, { useState, useEffect } from "react";

//context
import { GameContext } from "./GameContext";

import { axiosWithAuth } from "../../utils/axiosWithAuth"

export default function GameProvider({ children }) {
  //state
  const [roomInfo, setRoomInfo] = useState({
    title: "Narrow Passage",
    description: "The narrow passage bends here from west to north. The smell of gold permeates the air.",
    players: [
        "somebody",
        "steveo",
        "JTyzzerThaBoss",
        "erik",
        "hood",
        "hood",
    ],
  });

  useEffect(()=>{
    axiosWithAuth()
    .get('/api/adv/init/')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

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
