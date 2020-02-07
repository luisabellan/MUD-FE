import React, {useState, useContext} from 'react'
import styled from 'styled-components'

//context
import { GameContext } from '../../../contexts/GameContext'

//components
import ProgressBar from './ProgressBar'

const PlayerStatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100%;

`

const PlayerInfo = styled.div`
    display: flex;
    color: white;
    width: 30%;
`
const PlayerName = styled.div`
    display: flex;
    color: white;
    width: 30%;
    font-size: 1.4rem;
`


export default function PlayerStatBar() {

    const { roomInfo } = useContext(GameContext)

    return (
        <PlayerStatusContainer>
            <PlayerName>Name:  <span>{roomInfo.name}</span></PlayerName>
            <PlayerInfo><span style={{marginRight: '10px'}}>HP:</span><ProgressBar playerInfo={roomInfo.hp} color='#9a0606'/></PlayerInfo>
            <PlayerInfo><span style={{marginRight: '10px'}}>MP:</span><ProgressBar playerInfo={100} color='#650d88'/></PlayerInfo>
        </PlayerStatusContainer>
    )
}
