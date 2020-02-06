import React from 'react'

//components
import PlayerStatBar from './player-status/PlayerStatBar'
import GameInfo from './GameInfo'
import GameActions from './GameActions'
import Movement from './Movement'

//styles
import * as Widgets from '../StyledWidgets'



export default function GameView() {

    return (
        <div style={{margin: '20px', background: ''}}>
            <Widgets.DisplayContainer> 

            </Widgets.DisplayContainer>

            <Widgets.MainGameContainer>

                <Widgets.StatsGameInfoInput>
                    <PlayerStatBar/>
                    <GameInfo/>
                </Widgets.StatsGameInfoInput>

                <Widgets.GameControls>
                    <GameActions/>
                    <Movement/>
                </Widgets.GameControls>

            </Widgets.MainGameContainer>
        </div>
    )
}
