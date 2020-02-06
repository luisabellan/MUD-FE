import React, { useState, useEffect } from "react";

//context
import { GameContext } from "./GameContext";

import { axiosWithAuth } from "../utils/axiosWithAuth"

import axios from 'axios'

export default function GameProvider({ children }) {
  //state
  const [roomInfo, setRoomInfo] = useState({
    title: "",

    description: "",
    players: [],
  });

  useEffect(()=>{
    axiosWithAuth()
    .get('/api/adv/init/')
      .then(res => {
        console.log("from useEffect",res)
        setRoomInfo({...res.data})
      })
      .catch(err => {
        console.log("from useEffect",err)
      })
  //   axios
  //   .get('https://build-week-mud.herokuapp.com/api/adv/init/', {headers: {
  //     "Content-Type": 'application/json',
  //     "Access-Control-Allow-Origin": "*",
  //     Authorization: `Token 0117760cc5b5e3ddb53ef9352e0504c879aeabd6`,
  },[])
  const movePlayer = (direction) => {
    axiosWithAuth()
    .post('/api/adv/movePlayer/', {"direction": direction})
      .then(res => {
        console.log("from useEffect",res)
        setRoomInfo({...res.data})
      })
      .catch(err => {
        console.log("from useEffect",err)
      })
  }

  
  return (
    <>
      <GameContext.Provider
        value={{
          roomInfo,
          movePlayer
        }}
      >
        {children}
      </GameContext.Provider>
    </>
  );
}
