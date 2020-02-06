import React, { useContext } from 'react'



//styles
import * as Widget from '../StyledWidgets'

//context 
import { GameContext } from '../../contexts/GameContext'

export default function GameInfo() {
    const { roomInfo, gameOutput } = useContext(GameContext)
    return (
        <Widget.GameInfoContainer>
            <Widget.RoomInfo>
                <Widget.RoomTitle>{roomInfo.title}</Widget.RoomTitle>
                <Widget.RoomDesc>{roomInfo.description}</Widget.RoomDesc>
            </Widget.RoomInfo>
            <Widget.GameOutput>
                {gameOutput.map(msg => {
                    return <p><span style={{color: 'purple'}}> => </span>{msg}</p>
                })}
            </Widget.GameOutput>
            <Widget.GameInput/>
        </Widget.GameInfoContainer>
    )
}
