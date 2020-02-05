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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
    overflow-y: auto;
`

export const GameActionsContainer = styled.div`
    display: flex;
    height: 50%;
    width: 48%;
    border: 1px solid white;


`

export const ActionButton = styled.button`
    height: 50px;
    width: 100%;
    background-color: white;
    border: none;
    color: black;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`

export const PlayersContainer = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 48%;
    border: 1px solid green;
`

export const MovementContainer = styled.div`
    width: 100%;
`

export const Player = styled.div`
    height: 200px;
    width: 100%;
`
//AppRouter
export const Nav = styled.div`
    background-color: #0A235C;
    height: 80px;
    box-shadow: 5px 5px 8px #BFBFBF;
    background: #1C1C1C;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    a {
        margin-top: 25px;
        text-decoration: none;
        color: #F0F0F0;
        font-size: 18px;
        cursor: pointer;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }
    }
`;

//Registration
export const RegisterForm = styled.div`
    background-image: linear-gradient(to top, rgba(157,0,0, 0), rgba(157,0,1));
    }
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 100px;
    border: 2px solid #E3E1E1;
    border-radius: 12px;
    box-shadow: 5px 5px 8px #BFBFBF;
    width: 30%;
    min-width: 300px;
    align-items: center;
    height: 360px;
    display: flex;
    justify-content: center;
    @media (max-width: 500px) {
        
        
    }
`;

export const Context = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 25px;
    margin-top: 50px;
    color: #FFFFFF;
    @media (max-width: 500px) {
        
    }
    
    .registration-form {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        margin-left: 10px;
        width: 200px;
        
        label {
            color: #FFFFFF;
            margin-bottom: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
        }
    }
`;

export const RegisterBtn = styled.div`
    font-size: 12px;
    border-radius: 5px;
    padding: 8px 8px;
    width: 40%;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: #FFFFFF;
    color: #202020;

`;

//Login
export const LoginForm = styled.div`
    background-image: linear-gradient(to top, rgba(157,0,0, 0), rgba(157,0,1));
    }
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 100px;
    border: 2px solid #E3E1E1;
    border-radius: 12px;
    box-shadow: 5px 5px 8px #BFBFBF;
    width: 30%;
    min-width: 300px;
    align-items: center;
    height: 360px;
    display: flex;
    justify-content: center;
    @media (max-width: 500px) {
        
        
    }
`;

export const LoginContext = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 25px;
    margin-top: 10px;
    color: #FFFFFF;
    @media (max-width: 500px) {
        
    }
    
    .login-form {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        margin-left: 10px;
        width: 200px;
        
        label {
            color: #FFFFFF;
            margin-bottom: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
        }
    }
`;

export const LoginBtn = styled.div`
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px;
    padding: 8px 8px;
    width: 40%;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: #FFFFFF;
    color: #202020;

`;

export const LoginHeader = styled.h1`
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    
`;

//WelcomePage
export const WelcomeImage = styled.div`
    img {
        margin-top: 80px;
    }
`;