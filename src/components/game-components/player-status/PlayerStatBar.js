import React, {useState, useContext} from 'react'
import styled from 'styled-components'

//context
import { PlayerContext } from '../../../contexts/player-context/PlayerContext'

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
    const { playerInfo } = useContext(PlayerContext)

    return (
        <PlayerStatusContainer>
            <PlayerInfo>Name: {playerInfo.name}</PlayerInfo>
            <PlayerInfo>HP<ProgressBar playerInfo={playerInfo.health} color='green'/></PlayerInfo>
            <PlayerInfo>MP<ProgressBar playerInfo={playerInfo.magic} color='blue'/></PlayerInfo>
        </PlayerStatusContainer>
    )
}
