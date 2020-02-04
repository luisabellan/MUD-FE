//link to setup
//https://medium.com/swlh/creating-a-progress-bar-in-react-181501bc22f1

import React, {useState, useContext} from 'react'
import styled from 'styled-components'

//context
import { PlayerContext } from '../../../contexts/player-context/PlayerContext'

const PlayerStatusContainer = styled.div`
    
`




export default function PlayerStatBar() {
    const { playerInfo } = useContext(PlayerContext)

    return (
        <PlayerStatusContainer>

        </PlayerStatusContainer>
    )
}
