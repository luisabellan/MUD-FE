import React, { useState, useEffect } from 'react'

//context 
import GameContext from './GameContext'

export default function GameProvider({ children }) {

    //state
    const [ roomInfo, setRoomInfo ] = useState({}) 

    return (
        <>
            <GameContext.Provider
                value={{
                    roomInfo,
                }}
            >
                {children}
            </GameContext.Provider>
        </>
    )
}
