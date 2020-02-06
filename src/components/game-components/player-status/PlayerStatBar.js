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

`

const PlayerInfo = styled.div`
    display: flex;
    color: white;
    width: 30%;
`


export default function PlayerStatBar() {

    const { roomInfo } = useContext(GameContext)

    return (
        <PlayerStatusContainer>
            <PlayerInfo>Name: {roomInfo.name}</PlayerInfo>
            <PlayerInfo><span style={{marginRight: '10px'}}>HP:</span><ProgressBar playerInfo={100} color='#9a0606'/></PlayerInfo>
            <PlayerInfo><span style={{marginRight: '10px'}}>MP:</span><ProgressBar playerInfo={100} color='#650d88'/></PlayerInfo>
        </PlayerStatusContainer>
    )
}
