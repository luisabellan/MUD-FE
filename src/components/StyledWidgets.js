import styled from 'styled-components';

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