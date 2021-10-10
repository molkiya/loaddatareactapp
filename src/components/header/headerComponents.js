import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 60px;
    margin: 0;
    padding: 0 30vh 0 30vh;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: tomato;
`

export const HeaderGreeting = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 30px;
    color: #fff;
`

export const HeaderSortContainer = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`

export const SortingButton = styled.button`
    margin: 0 0 0 5vh;
    font-size: 25px;
    font-weight: bold;
    border-radius: 30px;
    background-color: red;
    color: #fff;
    border: none;
    height: 5vh;
    width: 30vh;

    :hover {
        transition: 0.3s ease-in-out;
        color: #000;
        background-color: #fff;
    } 
`