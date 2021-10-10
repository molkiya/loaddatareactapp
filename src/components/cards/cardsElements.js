import styled from "styled-components";

export const CardsContainer = styled.div`
    width: auto;
    margin-top: 10vh;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const CardWrapper = styled.div`
    height: 30vh;
    width: 30vh;
    background: #fff;
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Card = styled.div`
    height: 20vh;
    width: 25vh;
    font-size: 25px;
    color: #fff;
    display: flex;
    background: tomato;
    padding: 5px 5px 0 5px;
`

export const ButtonContainer = styled.div`
    margin: 2% 0 0 0;
    display: flex;
    justify-content: space-between;
    height: 30px;
    width: 20vh;
`

export const ButtonForLike = styled.button`
    font-size: 15px;
    font-weight: bold;
    border-radius: 10px;
    background-color: green;
    color: #fff;
    border: none;
    height: 5vh;
    width: 8vh;

    :hover {
        transition: 0.3s ease-in-out;
        color: #000;
        background-color: #fff;
    } 
`

export const ButtonForDelete = styled.button`
    font-size: 15px;
    font-weight: bold;
    border-radius: 10px;
    background-color: red;
    color: #fff;
    border: none;
    height: 5vh;
    width: 8vh;

    :hover {
        transition: 0.3s ease-in-out;
        color: #000;
        background-color: #fff;
    } 
`