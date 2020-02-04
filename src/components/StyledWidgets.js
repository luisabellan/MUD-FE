import styled from 'styled-components';

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