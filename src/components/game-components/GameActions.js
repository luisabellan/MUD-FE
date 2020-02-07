import React, { useContext } from 'react'

//styles 
import * as Widget from '../StyledWidgets'

//context
import { GameContext } from '../../contexts/GameContext'

import { Howl } from 'howler';

import etheraelAttack from '../../sounds/etherael-attack.wav'

export default function GameActions() {

    const sound = new Howl({
        src: [etheraelAttack]
    });


    const { roomInfo, attack } = useContext(GameContext)
    return (
        <>
            <Widget.GameActionsContainer>
                <Widget.ActionButton 
                onClick={() => {
                    attack()
                    sound.play()

                }}
                >ATTACK</Widget.ActionButton> 
            </Widget.GameActionsContainer>
            <Widget.PlayersContainer>
                {roomInfo.players.map(player => {

                    return <Widget.Player><h2>{player}</h2></Widget.Player>
                })}
            </Widget.PlayersContainer>
        </>
    )
}

