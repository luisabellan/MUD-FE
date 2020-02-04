import styled from 'styled-components';

export const DisplayContainer = styled.div`
    width: 100%;
    height: 350px;
    background: #2d2d2d;
    border: 2px solid red;
`
export const MainGameContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 10px auto;
    border: 2px solid orange
`
export const StatsGameInfoInput = styled.div`
    width: 100%;
    height: 20%;
    background: #2d2d2d;
`

export const GameControls = styled.div`
    width: 30%;
    height: 500px;
    background: #2d2d2d;
    border: 2px solid purple
`

export const Tracker = styled.div`
    width: 250px;
    height: 20px;
    background: rgb(35,35,35);
    border-radius: 10px;
    box-shadow:inset 0 - 5px #000
`

export const ProgressInTracker = styled.div`
    text-align: center;
    width: ${props => props.width};
    height: 100%;
    background: ${props => props.color};
    border-radius: 8px
`

export const GameInfoContainer = styled.div`
    text-align: center;
    width: 100%;
    height: 80%;
    background: black;

`
export const GameInput = styled.input`
    width: 100%;
    color: white;
    height: 35px;
    background: black;
    border: 1px solid  gray;
    font-size: 1.3rem;
`
export const GameInfo = styled.input`
    width: 100%;
    height: 405px;
    background: black;
`