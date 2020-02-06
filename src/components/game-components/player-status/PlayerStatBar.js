import React, {useState, useContext} from 'react'
import styled from 'styled-components'

//context
import { GameContext } from '../../../contexts/GameContext'

//components
import ProgressBar from './ProgressBar'

const PlayerStatusContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    border: 2px solid #909090

`

const PlayerInfo = styled.div`
    display: flex;
    color: orange;
    width: 30%;
`


export default function PlayerStatBar() {

    const { roomInfo } = useContext(GameContext)

    return (
        <PlayerStatusContainer>
            <PlayerInfo>Name: {roomInfo.name}</PlayerInfo>
            <PlayerInfo>HP<ProgressBar playerInfo={100} color='green'/></PlayerInfo>
            <PlayerInfo>MP<ProgressBar playerInfo={100} color='blue'/></PlayerInfo>
        </PlayerStatusContainer>
    )
}
