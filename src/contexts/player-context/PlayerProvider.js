import React, { useState, useEffect } from 'react'

//context
import PlayerContext from './PlayerContext'

export default function PlayerProvider({ children }) {

    //state
    const [ playerInfo, setPlayerInfo ] = useState({}) 

    
    return (
        <>
            <PlayerContext.Provider
                value={{
                    playerInfo,
                }}
            >
                {children}
            </PlayerContext.Provider>
        </>
    )
}
