import React, { useContext } from 'react'



//styles
import * as Widget from '../StyledWidgets'

//context 
import { GameContext } from '../../contexts/GameContext'

export default function GameInfo() {
    const { roomInfo } = useContext(GameContext)
    console.log(roomInfo.description)
    return (
        <Widget.GameInfoContainer>
            <Widget.RoomInfo>
                <h1 style={{color: 'purple'}}>{roomInfo.title}</h1>
                <p style={{color: 'purple'}}>{roomInfo.description}</p>
            </Widget.RoomInfo>

            {/* <Widget.GameInput/> */}
        </Widget.GameInfoContainer>
    )
}
