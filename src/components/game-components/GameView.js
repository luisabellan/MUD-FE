import React from 'react'

//components
import PlayerStatBar from './player-status/PlayerStatBar'
import GameInfo from './GameInfo'

//styles
import * as Widgets from '../StyledWidgets'



export default function GameView() {

    return (
        <div style={{margin: '20px', background: 'black'}}>
            <Widgets.DisplayContainer> 

            </Widgets.DisplayContainer>

            <Widgets.MainGameContainer>

                <Widgets.StatsGameInfoInput>
                    <PlayerStatBar/>
                    <GameInfo/>
                </Widgets.StatsGameInfoInput>

                <Widgets.GameControls>
                    
                </Widgets.GameControls>

            </Widgets.MainGameContainer>
        </div>
    )
}
