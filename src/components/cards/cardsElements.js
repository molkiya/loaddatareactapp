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
    background: tomato;
    padding: 5px 5px 0 5px;
`