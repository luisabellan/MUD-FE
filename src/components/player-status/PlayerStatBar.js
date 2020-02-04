//link to setup
//https://medium.com/swlh/creating-a-progress-bar-in-react-181501bc22f1

import React, {useState, useContext} from 'react'
import styled from 'styled-components'

//context
import { PlayerContext } from '.././../contexts/player-context/PlayerContext'

const Tracker = styled.div`
    width: 200px;
    height: 20px;
    margin: 15px auto;
    background: rgb(35,35,35);
    border-radius: 10px;
    box-shadow:inset 0 - 5px #000
`

const ProgressInTracker = styled.div`
    text-align: center;
    width: ${props => props.width};
    height: 100%;
    background: green;
    border-radius: 8px
`




export default function PlayerStatBar() {
    const { playerInfo } = useContext(PlayerContext)

    return (
        <Tracker>
            <ProgressInTracker width={`${playerInfo.health}%`}>
                <p style={{color: 'white'}}>{`${playerInfo.health}/100`}</p>
            </ProgressInTracker>
        </Tracker>
    )
}
