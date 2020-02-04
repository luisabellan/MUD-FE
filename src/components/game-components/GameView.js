import React from 'react'

import styled from 'styled-components'

const DisplayContainer = styled.div`
    width: 100%;
    margin-top: 75px;
    height: 350px;
    background: #2d2d2d;
    border: 2px solid red;
`
const MainGameContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 10px auto;
    background: #2d2d2d;
    border: 2px solid orange
`
const StatsGameInfoInput = styled.div`
    width: 70%;
    background: #2d2d2d;
    border: 2px solid cyan
`

const GameControls = styled.div`
    width: 30%;
    height: 500px;
    background: #2d2d2d;
    border: 2px solid purple
`


export default function GameView() {

    return (
        <div style={{margin: '20px', background: 'black'}}>
            <DisplayContainer> 

            </DisplayContainer>

            <MainGameContainer>
                <StatsGameInfoInput>
                    
                </StatsGameInfoInput>
                <GameControls>
                    
                </GameControls>
            </MainGameContainer>
        </div>
    )
}
